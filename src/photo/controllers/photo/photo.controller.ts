import { Controller, Param, ParseIntPipe, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PhotoService } from 'src/photo/services/photo/photo.service';

@Controller('api/picture')
export class PhotoController {

    constructor(private pictureService: PhotoService){}

    @Post('upload_pictures/:entity/:id')
    @UseInterceptors(FilesInterceptor('pictures', 20, {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const name = file.originalname.split('.')[0];
                const FileExtension = file.originalname.split('.')[1];
                const newFilename = name.split(" ").join('_')+'_'+Date.now()+'.'+FileExtension

                cb(null, newFilename);
            }
        }),
        fileFilter: (req, file, cb) => {
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
                return cb(null, false);
            }
            cb(null, true);
        },
    }))
    uploadPhotos(@Param('entity') entity: string , @Param('id', ParseIntPipe) id: number, @UploadedFiles() files: Array<Express.Multer.File>){
        return this.pictureService.upload(entity, id, files);
    }
}