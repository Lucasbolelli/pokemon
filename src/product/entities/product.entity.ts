import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Column("varchar", {length: 60, nullable: false})
    produto: string 

    @Column("decimal", {precision: 4, scale: 2, nullable: false})
    valor: number 
}
