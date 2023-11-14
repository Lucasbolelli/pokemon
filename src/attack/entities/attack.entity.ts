import { Pokemon } from "src/pokemon/entities/pokemon.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Attack{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    attack1: string;
    
}