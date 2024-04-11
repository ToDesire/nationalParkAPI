import { BadRequestException, HttpCode, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/typeorm/entities/activity.entity';
import { createActivityParam } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(Activity) private activityRepository: Repository<Activity>
    ){}

    async createActivity(activityData: createActivityParam){
        try{
            const activity = await this.activityRepository.create({
                ...activityData,
            });
            return activity;
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    async fetchActivities(){
        return await this.activityRepository.find();
    }
}
