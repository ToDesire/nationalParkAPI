import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "./reservation.entity";
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

    @OneToMany(() => Reservation, (reservation) => reservation.client)
    reservations: Reservation[];

    @ManyToMany(() => Evenement)
    @JoinTable()
    evenements: Evenement[];
}