import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Response } from 'express'
import { ApiTags, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { ErrorDto, InsertUpdateReturnDto } from 'src/utils/dto/general.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Endpoint de usuários')
@ApiBadRequestResponse({ description: 'Bad Request', type: ErrorDto})
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  
  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res: Response) {
    return this.productService.create(createProductDto).then(result=>{
      res.status(200).send(result)
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.productService.findAll().then(result=>{
      res.status(200).send(result)
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })

  }
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.productService.findOne(+id).then(result=>{
      res.status(200).send(result)
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Patch()
  @ApiOkResponse({ description: 'Sucesso:', type:InsertUpdateReturnDto}) 
  Pro(@Body() UpdateProductDto: UpdateProductDto, @Res() res: Response) {
    return this.productService.update(UpdateProductDto).then(result=>{
      res.status(200).send({status:"Ok"})
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Patch()
  update(@Body() updateProductDto: UpdateProductDto, @Res() res: Response) {
    return this.productService.update(updateProductDto).then(()=>{
      res.status(200).send({status:"Registro alterado com sucesso!"})
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Patch('/valor')
  updatePassword(@Body() updateProductDto: UpdateProductDto, @Res() res: Response) {
    return this.productService.update(updateProductDto).then(result=>{
      res.status(200).send({status:"Valor do Produto alterado com sucesso"})
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }

  @Patch('/produto')
  updateStatus(@Body() updateProductDto: UpdateProductDto, @Res() res: Response) {
    return this.productService.update(updateProductDto).then(()=>{
      res.status(200).send({status:"Produto alterado com sucesso"})
    }).catch(error => {
      throw new HttpException( error.message, error.status );
    })
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}