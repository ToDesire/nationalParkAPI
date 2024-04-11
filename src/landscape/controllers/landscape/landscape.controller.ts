import { Body, Controller, Get} from '@nestjs/common';
import { LandscapeService } from 'src/landscape/services/landscape/landscape.service';

@Controller('landscape')
export class LandscapeController {
    constructor(private landscapeService: LandscapeService){}

    @Get()
    landscapes(){
        return this.landscapeService.fetchLandscapes();
    }
}
