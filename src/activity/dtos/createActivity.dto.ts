import { UploadedFile } from "@nestjs/common";
import { IsString } from "class-validator";

export class CreateActivityDto {
    @IsString()
    activity_name: string;

    @IsString()
    activity_description: string;
}