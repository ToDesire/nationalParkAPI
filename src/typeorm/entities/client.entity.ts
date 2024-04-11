import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Evenement } from "./evenement.entity";

@Entity({ name: 'clients'})
export class Client{
    @PrimaryGeneratedColumn()
    client_id: number;

    @Column()
    name: string;

    @Column()
    phone_number: string;

    @Column()
    mail: string;

    @Column()
    nationality: string;

    @ManyToMany(() => Evenement)
    @JoinTable()
    evenements: Evenement[];
}