import { Column } from "typeorm";

export class CreatePokeAtkDto {

    @Column("int", {nullable: false})
    idpoke:number

    @Column("int", { nullable: false})
    idatk: number;
}
