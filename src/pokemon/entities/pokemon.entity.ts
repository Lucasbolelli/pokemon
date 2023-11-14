import { Abilitie } from "src/abilitie/entities/abilitie.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column("varchar", {length: 60, nullable: false})
    name: string

    @Column("varchar", {length: 60, nullable: false})
    type: string

    @Column("varchar", {length: 60, nullable: true})
    genre: string

 

    
}
