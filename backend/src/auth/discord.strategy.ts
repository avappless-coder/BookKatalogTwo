import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-discord";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, "discord") {
  constructor(config: ConfigService) {
    super({
      clientID: config.get<string>("DISCORD_CLIENT_ID"),
      clientSecret: config.get<string>("DISCORD_CLIENT_SECRET"),
      callbackURL: config.get<string>("DISCORD_CALLBACK_URL"),
      scope: ["identify", "email"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ) {
    return {
      provider: "discord",
      providerId: profile?.id,
      email: profile?.email,
      name: profile?.username,
    };
  }
}
