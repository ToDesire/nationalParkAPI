import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import { Reservation } from './reservation.entity';
import { Circuit } from "./circuit.entity";
import { Guide } from "./guide.entity";

@Entity({name: 'sessions'})
export class Session{
    @PrimaryGeneratedColumn()
    session_id: number;

    @Column()
    session_start_date: Date;

    @Column()
    session_end_date: Date;

    @OneToMany(() => Reservation, (reservation) => reservation.session)
    reservations: Reservation[];

    @ManyToOne(() => Circuit, (circuit) => circuit.sessions)
    circuit: Circuit;

    @ManyToOne(() => Guide, (guide) => guide.sessions)
    guide: Guide;
}