import { Module } from '@nestjs/common';
import { LandscapeController } from './controllers/landscape/landscape.controller';
import { LandscapeService } from './services/landscape/landscape.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Landscape } from 'src/typeorm/entities/landscape.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Landscape])],
  controllers: [LandscapeController],
  providers: [LandscapeService]
})
export class LandscapeModule {}
