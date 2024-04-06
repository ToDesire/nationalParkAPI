import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './typeorm/entities/client.entity';
import { Reservation } from './typeorm/entities/reservation.entity';
import { Circuit } from './typeorm/entities/circuit.entity';
import { Guide } from './typeorm/entities/guide.entity';
import { Landscape } from './typeorm/entities/landscape.entity';
import { Picture } from './typeorm/entities/picture.entity';
import { Session } from './typeorm/entities/session.entity';
import { Specie } from './typeorm/entities/specie.entity';
import { Tag } from './typeorm/entities/tag.entity';
import { ClientModule } from './client/client.module';
import { TagModule } from './tag/tag/tag.module';
import { Evenement } from './typeorm/entities/evenement.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'national_park',
    entities: [Circuit, Client, Evenement, Guide, Landscape, Picture, Reservation, Session, Specie, Tag],
    synchronize: true,
  }), ClientModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
