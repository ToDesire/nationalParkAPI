import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Session } from "./session.entity";

@Entity({name: 'guides'})
export class Guide {
    @PrimaryGeneratedColumn()
    guide_id: number;

    @Column()
    guide_name: string;

    @Column()
    contact: string;

    @Column()
    gender: string;

    @Column()
    language: string;

    @Column()
    guide_picture_url: string;

    @OneToMany(() => Session, (session) => session.guide)
    sessions: Session[]
}