import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Picture } from "./picture.entity";

@Entity({name: 'activities'})
export class Activity {
    @PrimaryGeneratedColumn()
    activity_id: number;

    @Column()
    activity_name: string;

    @Column()
    activity_description: string;

    @OneToMany(() => Picture, (picture) => picture.activity)
    pictures: Picture[];
}