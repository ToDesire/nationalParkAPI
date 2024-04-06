import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'evenements'})
export class Evenement {
    @PrimaryGeneratedColumn()
    event_id: number;

    @Column()
    event_start_date: Date;

    @Column()
    event_end_date: Date;

    @Column()
    event_description: string;
}