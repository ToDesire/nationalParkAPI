import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateSpecieDto } from 'src/specie/dtos/createSpecie.dto';
import { SpecieService } from 'src/specie/services/specie/specie.service';

@Controller('api/specie')
export class SpecieController {
    constructor(private specieService: SpecieService){}

    @Post('create')
    @UsePipes(new ValidationPipe())
    newSpecie(@Body() createSpecieData: CreateSpecieDto){
        return this.specieService.createSpecie(createSpecieData);
    }

    @Get()
    species(){
        return this.specieService.fetchSpecies();
    }
}
