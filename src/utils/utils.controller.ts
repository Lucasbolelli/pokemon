import { Body, Controller, Get, HttpException, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ErrorDto } from './dto/general.dto';
import { UtilsService } from './utils.service';
import { Response } from 'express';
import { ReturnCurrencyQuoteDto } from './dto/utils.dto';

@ApiTags('Utils')
@Controller('utils')
export class UtilsController {
    constructor(private utilsService: UtilsService) {}

    @Post('/currencyquote')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth('access-token')
    @ApiOkResponse({ description: 'Converte valores de moedas', type: ReturnCurrencyQuoteDto, isArray: true })
    async currencyQuote(@Body() data: ReturnCurrencyQuoteDto, @Res() res: Response) {                         
        return this.utilsService.currencyQuote(data).then(result => {                
            res.status(200).send(result[data.to + data.from]);
        }).catch(error => {
            throw new HttpException( error.message, error.status );
        })
    }
}
