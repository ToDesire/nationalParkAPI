import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Landscape } from 'src/typeorm/entities/landscape.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LandscapeService {
    constructor(
        @InjectRepository(Landscape) private landscapeRepository: Repository<Landscape>
        ){}
    
    async fetchLandscapes(){
        return await this.landscapeRepository.find()
    }
}
