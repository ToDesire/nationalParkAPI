import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from 'src/typeorm/entities/activity.entity';
import { Feedback } from 'src/typeorm/entities/feedback.entity';
import { Landscape } from 'src/typeorm/entities/landscape.entity';
import { Picture } from 'src/typeorm/entities/picture.entity';
import { Specie } from 'src/typeorm/entities/specie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
    constructor(
        @InjectRepository(Picture) private photoRepository: Repository<Picture>,
        @InjectRepository(Activity) private activityRepository: Repository<Activity>,
        @InjectRepository(Feedback) private feedbackRepository: Repository<Feedback>,
        @InjectRepository(Landscape) private landscapeRepository: Repository<Landscape>,
        @InjectRepository(Specie) private specieRepository: Repository<Specie>,
    ){}

    async upload(entity, id, images) {
        try {
            const pictures = await Promise.all(images.map(async (image) => {
                const make_pic = {
                    picture_title: image.filename,
                    picture_url: image.path
                };
                const picture = this.photoRepository.create(make_pic);
                return await this.photoRepository.save(picture);
            }));
    
            let entityToUpdate;
            switch (entity) {
                case 'activity':
                    entityToUpdate = await this.activityRepository.find({
                        where: {
                            activity_id: id,
                        },
                        relations: {
                            pictures: true,
                        }
                    });
                    break;
                case 'landscape':
                    entityToUpdate = await this.landscapeRepository.find({
                        where: {
                            landscape_id: id,
                        },
                        relations: {
                            pictures: true,
                        }
                    });;
                    break;
                case 'specie':
                    entityToUpdate = await this.specieRepository.find({
                        where: {
                            specie_id: id,
                        },
                        relations: {
                            pictures: true,
                        }
                    });
                    break;
                default:
                    throw new Error('Invalid entity type');
            }
    
            if (!entityToUpdate) {
                throw new Error('Entity not found');
            }
            
            entityToUpdate[0].pictures.push(...pictures);
    
            console.log(entityToUpdate);
            return await this[`${entity}Repository`].save(entityToUpdate);
        } catch (err) {
            throw new Error(err);
        }
    }

    
}
