import { Module } from '@nestjs/common';
import { ActivityController } from './controllers/activity/activity.controller';
import { ActivityService } from './services/activity/activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from 'src/typeorm/entities/activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activity])],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
