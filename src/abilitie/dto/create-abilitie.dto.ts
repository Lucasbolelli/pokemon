import { Column } from "typeorm";

export class CreateAbilitieDto {

    @Column("varchar", {length: 60, nullable: false})
    abilitie: string
}
