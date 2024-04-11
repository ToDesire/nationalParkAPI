import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Specie } from 'src/typeorm/entities/specie.entity';
import { createSpecieParam } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class SpecieService {
    constructor(
        @InjectRepository(Specie) private specieRepository: Repository<Specie>
    ){}

    async createSpecie(specieData: createSpecieParam){
        try{
            const specie = await this.specieRepository.create({
                ...specieData,
            });
            return specie;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    async fetchSpecies(){
        return await this.specieRepository.find();
    }
}
