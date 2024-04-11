import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Picture } from "./picture.entity";

@Entity({name: 'feedbacks'})
export class Feedback {
    @PrimaryGeneratedColumn()
    feedback_id: number;

    @Column()
    feedback_content: string;

    @OneToMany(() => Picture, (picture) => picture.feedback)
    pictures: Picture[];
}