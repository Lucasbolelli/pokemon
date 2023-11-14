import { IsOptional } from "class-validator"
import { Column } from "typeorm"

export class CreateCompetitiveDto {

    @Column()
    name: string

    @Column()
    form: string

    @Column()
    type1: string 

    @Column()
    type2: string

    @Column()
    abilitie: string 

    @Column()
    move1: string

    @Column()
    move2: string

    @Column()
    move3: string

    @Column()
    move4: string
}
