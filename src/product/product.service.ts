import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product)
            private readonly ProductRepository: Repository<Product>) {}
  async create(createProductDto: CreateProductDto): Promise<any> {
    return await this.ProductRepository.save(createProductDto)
  }
  async findAll(): Promise<any> {
    return await this.ProductRepository.find({order:{id:'ASC'}});
  }
  async findOne(id: number): Promise<any> {
    return await this.ProductRepository.findOne({where:{id:id}});
  }
  async update(updateProductDto: UpdateProductDto): Promise<any> {
    return await this.ProductRepository.update(updateProductDto.id, updateProductDto)
  }
  async remove(id: number): Promise<any>{
    return await this.ProductRepository.delete(id)
  }
}