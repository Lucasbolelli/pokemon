import { Injectable } from '@nestjs/common';
import { CreateAbilitieDto } from './dto/create-abilitie.dto';
import { UpdateAbilitieDto } from './dto/update-abilitie.dto';

@Injectable()
export class AbilitieService {
  create(createAbilitieDto: CreateAbilitieDto) {
    return 'This action adds a new abilitie';
  }

  findAll() {
    return `This action returns all abilitie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abilitie`;
  }

  update(id: number, updateAbilitieDto: UpdateAbilitieDto) {
    return `This action updates a #${id} abilitie`;
  }

  remove(id: number) {
    return `This action removes a #${id} abilitie`;
  }
}
