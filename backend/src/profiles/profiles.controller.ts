import { Body, Controller, Get, Param, Patch, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { ProfilesService } from "./profiles.service";

@Controller("profiles")
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get(":handle")
  getProfile(@Param("handle") handle: string) {
    return this.profilesService.getByHandle(handle);
  }

  @UseGuards(JwtAuthGuard)
  @Patch("me")
  updateMe(@Req() req: Request, @Body() dto: UpdateProfileDto) {
    const user = req.user as { userId: string };
    return this.profilesService.updateMyProfile(user.userId, dto);
  }
}
