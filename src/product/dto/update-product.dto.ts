import { IsNumber, IsString } from "class-validator"

export class UpdateProductIdDto{
    @IsNumber()
    id: number
}
export class UpdateProductDto extends UpdateProductIdDto{
    
    @IsString()
    produto: string
    @IsNumber()
    valor: number
}