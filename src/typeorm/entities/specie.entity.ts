import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Picture } from "./picture.entity";
import { Landscape } from "./landscape.entity";

@Entity({name: 'species'})
export class Specie {
    @PrimaryGeneratedColumn()
    specie_id: number;

    @Column()
    specie_name: string;

    @Column()
    specie_description: string;

    @Column()
    specie_type: string;

    @OneToMany(() => Picture, (picture) => picture.specie)
    pictures: Picture[];

    @ManyToMany(() => Landscape)
    @JoinTable()
    landscapes: Landscape[];
}