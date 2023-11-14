import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

    export class ReturnCurrencyQuoteDto {

        @Length(3)
        @ApiProperty()
        to: string

        @Length(3)
        @ApiProperty()
        from: string
    }