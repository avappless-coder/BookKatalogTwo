import { IsOptional, IsString, IsUrl, MaxLength } from "class-validator";

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  nickname?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  bio?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}
