import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get("me")
  getMe(@Req() req: Request) {
    const user = req.user as { userId: string };
    return this.usersService.getMe(user.userId);
  }
}
