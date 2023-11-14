import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    produto: string

    @ApiProperty()
    @IsNumber()
    valor: number
}