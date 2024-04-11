import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateActivityDto } from 'src/activity/dtos/createActivity.dto';
import { ActivityService } from 'src/activity/services/activity/activity.service';

@Controller('api/activity')
export class ActivityController {
    constructor(private activityService: ActivityService){}

    @Post('create')
    @UsePipes(new ValidationPipe())
    newActivity(@Body() createActivityData: CreateActivityDto){
        return this.activityService.createActivity(createActivityData);
    }

    @Get()
    activities(){
        return this.activityService.fetchActivities();
    }

}
