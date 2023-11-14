import { Column} from "typeorm";

export class CreateAttackDto {

    @Column("varchar", {length: 60 ,nullable: false})
    attack1: string

}
