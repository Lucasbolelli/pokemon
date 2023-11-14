import { Pokemon } from "src/pokemon/entities/pokemon.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
@Entity()

export class Abilitie {

    @PrimaryGeneratedColumn()
    id: Number

    @Column("varchar")
    abilitie: string

}

