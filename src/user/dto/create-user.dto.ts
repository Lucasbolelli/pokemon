import { IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    password: string

    @ApiProperty()
    @IsString()
    status: string
}
