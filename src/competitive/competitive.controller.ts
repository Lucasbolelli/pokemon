import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, Patch, Post, Res} from '@nestjs/common';
import { CompetitiveService } from './competitive.service';
import { Response } from 'express'
import { CreateCompetitiveDto } from './dto/create-competitive.dto';
import { UpdateCompetitiveDto } from './dto/update-competitive.dto';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { NotFoundError } from 'src/error/types/notfounderror';

@Controller('competitive')
export class CompetitiveController {
  constructor(private readonly competitiveService: CompetitiveService) {}

  @Post()
  create(@Body() data: any, @Res() res: Response) {
    return this.competitiveService.create(data).then(result=>{
      res.status(200).send(result)
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.competitiveService.findAll().then(result=>{
      res.status(200).send(result)
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response ) {
    return this.competitiveService.findOne(+id).then(result=>{
      if (!result) {
        throw new NotFoundError("pokemon não encontrado")  
      }
        res.status(200).send(result)
    })
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCompetitiveDto) {
    return this.competitiveService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.competitiveService.remove(id);
  }

}
