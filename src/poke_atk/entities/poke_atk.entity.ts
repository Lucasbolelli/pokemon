import { Column, PrimaryGeneratedColumn } from "typeorm";

export class PokeAtk {

    @Column("int")
    idpoke:number

    @Column("int")
    idatk: number;
}
