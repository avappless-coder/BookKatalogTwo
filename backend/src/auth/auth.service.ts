import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../prisma/prisma.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcryptjs";

type OAuthProfile = {
  provider: string;
  providerId: string;
  email?: string | null;
  name?: string | null;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new BadRequestException("Email already registered");
    }
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        profile: {
          create: {
            nickname: dto.nickname ?? dto.email.split("@")[0],
          },
        },
      },
      include: { profile: true },
    });
    return this.issueTokens(user.id, user.email);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user || !user.passwordHash) {
      throw new BadRequestException("Invalid credentials");
    }
    const ok = await bcrypt.compare(dto.password, user.passwordHash);
    if (!ok) {
      throw new BadRequestException("Invalid credentials");
    }
    return this.issueTokens(user.id, user.email);
  }

  async validateOAuthLogin(profile: OAuthProfile) {
    if (!profile.provider || !profile.providerId) {
      throw new BadRequestException("OAuth profile is invalid");
    }

    const existingAccount = await this.prisma.oAuthAccount.findUnique({
      where: {
        provider_providerAccountId: {
          provider: profile.provider,
          providerAccountId: profile.providerId,
        },
      },
      include: { user: true },
    });

    if (existingAccount?.user) {
      return this.issueTokens(existingAccount.user.id, existingAccount.user.email);
    }

    if (!profile.email) {
      throw new BadRequestException("OAuth email is missing");
    }

    let user = await this.prisma.user.findUnique({
      where: { email: profile.email },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: profile.email,
          profile: {
            create: {
              nickname:
                profile.name ?? profile.email.split("@")[0] ?? "reader",
            },
          },
        },
      });
    }

    await this.prisma.oAuthAccount.create({
      data: {
        provider: profile.provider,
        providerAccountId: profile.providerId,
        userId: user.id,
      },
    });

    return this.issueTokens(user.id, user.email);
  }

  private issueTokens(userId: string, email: string) {
    const accessToken = this.jwt.sign({ sub: userId, email });
    return {
      accessToken,
      tokenType: "Bearer",
    };
  }
}
