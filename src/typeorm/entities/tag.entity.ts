import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evenement } from "./evenement.entity";

@Entity({name: 'tags'})
export class Tag{
    @PrimaryGeneratedColumn()
    tag_id: number;

    @Column()
    tag_name: string;

    @ManyToMany(() => Evenement)
    @JoinTable()
    evenements: Evenement[];
}