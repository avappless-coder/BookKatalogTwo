import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-telegram";

@Injectable()
export class TelegramStrategy extends PassportStrategy(Strategy, "telegram") {
  constructor(config: ConfigService) {
    super({
      botToken: config.get<string>("TELEGRAM_BOT_TOKEN"),
      callbackURL: config.get<string>("TELEGRAM_CALLBACK_URL"),
    });
  }

  async validate(profile: any) {
    return {
      provider: "telegram",
      providerId: profile?.id?.toString?.() ?? profile?.id,
      email: null,
      name: profile?.username ?? profile?.displayName,
    };
  }
}
