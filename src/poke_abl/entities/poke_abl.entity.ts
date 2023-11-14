import { Column } from "typeorm";

export class PokeAbl {

    @Column("int")
    idpoke: number

    @Column("int")
    idabilitie: number
}
