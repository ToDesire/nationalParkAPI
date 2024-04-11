import { Module } from '@nestjs/common';
import { SpecieController } from './controllers/specie/specie.controller';
import { SpecieService } from './services/specie/specie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specie } from 'src/typeorm/entities/specie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Specie])],
  controllers: [SpecieController],
  providers: [SpecieService]
})
export class SpecieModule {}
