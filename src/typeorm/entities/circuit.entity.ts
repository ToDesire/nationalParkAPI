import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Session } from "./session.entity";
import { Landscape } from "./landscape.entity";

@Entity({name: 'circuits'})
export class Circuit {
    @PrimaryGeneratedColumn()
    circuit_id: number;

    @Column()
    circuit_name: string;

    @Column()
    distance: number;

    @OneToMany(() => Session, (session) => session.circuit)
    sessions: Session[]

    @ManyToMany(() => Landscape)
    @JoinTable()
    landscapes: Landscape[];
}