import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post("login")
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth() {
    return;
  }

  @Get("google/callback")
  @UseGuards(AuthGuard("google"))
  async googleCallback(@Req() req: Request) {
    return this.authService.validateOAuthLogin(req.user as any);
  }

  @Get("discord")
  @UseGuards(AuthGuard("discord"))
  async discordAuth() {
    return;
  }

  @Get("discord/callback")
  @UseGuards(AuthGuard("discord"))
  async discordCallback(@Req() req: Request) {
    return this.authService.validateOAuthLogin(req.user as any);
  }

  @Get("telegram")
  @UseGuards(AuthGuard("telegram"))
  async telegramAuth() {
    return;
  }

  @Get("telegram/callback")
  @UseGuards(AuthGuard("telegram"))
  async telegramCallback(@Req() req: Request) {
    return this.authService.validateOAuthLogin(req.user as any);
  }
}
