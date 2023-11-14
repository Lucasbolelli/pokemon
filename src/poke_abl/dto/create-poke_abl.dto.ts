import { Column } from "typeorm"

export class CreatePokeAblDto {

    @Column("int", { nullable: false})
    idpoke: number

    @Column("int", {nullable: false})
    idabilitie: number
}
