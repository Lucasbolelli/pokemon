import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompetitiveDto } from './dto/create-competitive.dto';
import { UpdateCompetitiveDto } from './dto/update-competitive.dto';
import { Competitive } from './entities/competitive.entity';

@Injectable()
export class CompetitiveService {
       constructor(@InjectRepository(Competitive)
                        private readonly competitiveRepository: Repository<Competitive>){}

  create(data: CreateCompetitiveDto) {
    return this.competitiveRepository.save(data);
  }

  findAll() {
    return this.competitiveRepository.find();
  }

  async findOne(id: number): Promise<any> {   
    return this.competitiveRepository.findOne({where:{id:id}});               
    }

  update(id: number, data: UpdateCompetitiveDto) {
    return this.competitiveRepository.update(id, data);
  }

  remove(id: number) {
    return this.competitiveRepository.delete(id);
  }

}
