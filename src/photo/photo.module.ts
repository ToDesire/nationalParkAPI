import { Module } from '@nestjs/common';
import { PhotoController } from './controllers/photo/photo.controller';
import { PhotoService } from './services/photo/photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from 'src/typeorm/entities/picture.entity';
import { Activity } from 'src/typeorm/entities/activity.entity';
import { Feedback } from 'src/typeorm/entities/feedback.entity';
import { Landscape } from 'src/typeorm/entities/landscape.entity';
import { Specie } from 'src/typeorm/entities/specie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Picture, Activity, Feedback, Landscape, Specie])],
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {}
