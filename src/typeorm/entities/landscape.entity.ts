import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Picture } from './picture.entity';

@Entity({name: 'landscapes'})
export class Landscape {
    @PrimaryGeneratedColumn()
    landscape_id: number;

    @Column()
    landscape_name: string;

    @Column()
    landscape_type: string;

    @Column()
    landscape_description: string;

    @OneToMany(() => Picture, (picture) => picture.landscape)
    pictures: Picture[];
}