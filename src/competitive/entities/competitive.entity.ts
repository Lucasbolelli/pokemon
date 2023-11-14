import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Competitive {

    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length: 40})
    name: string

    @Column('varchar', {length: 40, nullable: true})
    form: string

    @Column('varchar', {length: 40, nullable: false})
    type1: string 

    @Column('varchar', {length: 40, nullable: true })
    type2: string

    @Column('varchar', {length: 40, nullable: false})
    abilitie: string 

    @Column('varchar', {length: 40, nullable: false })
    move1: string

    @Column('varchar', {length: 40, nullable: true })
    move2: string

    @Column('varchar', {length: 40, nullable: true })
    move3: string

    @Column('varchar', {length: 40, nullable: true })
    move4: string
}
