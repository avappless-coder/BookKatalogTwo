import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  getByHandle(handle: string) {
    return this.prisma.profile.findFirst({
      where: { nickname: handle },
      include: { user: true },
    });
  }

  updateMyProfile(userId: string, dto: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { userId },
      data: dto,
    });
  }
}
