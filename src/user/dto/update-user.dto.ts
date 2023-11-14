import { IsNumber, IsString } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserIdDto{
    @ApiProperty()
    @IsNumber()
    id: number
}

export class UpdateUserDto extends UpdateUserIdDto{
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    email: string
}

export class UpdateUserPasswordDto extends UpdateUserIdDto{
    @ApiProperty()
    @IsString()
    password: string
}

export class UpdateUserStatusDto extends UpdateUserIdDto{
    @ApiProperty()
    @IsString()
    status: string
}