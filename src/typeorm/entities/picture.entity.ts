import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Specie } from "./specie.entity";
import { Landscape } from "./landscape.entity";
import { Activity } from "./activity.entity";
import { Feedback } from "./feedback.entity";

@Entity({name: 'pictures'})
export class Picture {
    @PrimaryGeneratedColumn()
    picture_id: number;

    @Column()
    picture_title: string;

    @Column()
    picture_url: string;

    @ManyToOne(() => Specie, (specie) => specie.pictures)
    specie: Specie;

    @ManyToOne(() => Landscape, (landscape) => landscape.pictures)
    landscape: Landscape;

    @ManyToOne(() => Activity, (activity) => activity.pictures)
    activity: Activity;

    @ManyToOne(() => Feedback, (feedback) => feedback.pictures)
    feedback: Feedback;
}