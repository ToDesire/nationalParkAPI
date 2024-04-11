import { IsString } from "class-validator";

export class CreateSpecieDto {
    @IsString()
    specie_name: string;

    @IsString()
    specie_description: string;

    @IsString()
    specie_type: string;
}