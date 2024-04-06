import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Session } from "./session.entity";

@Entity()
export class Reservation {
        @PrimaryGeneratedColumn()
        reservation_id: number;
    
        @Column()
        reservation_date: Date;

        @ManyToOne(() => Client, (client) => client.reservations)
        client: Client;

        @ManyToOne(() => Session, (session) => session.reservations)
        session: Session;
}