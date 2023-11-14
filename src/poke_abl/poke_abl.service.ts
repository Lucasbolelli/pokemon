import { Injectable } from '@nestjs/common';
import { CreatePokeAblDto } from './dto/create-poke_abl.dto';
import { UpdatePokeAblDto } from './dto/update-poke_abl.dto';

@Injectable()
export class PokeAblService {
  create(createPokeAblDto: CreatePokeAblDto) {
    return 'This action adds a new pokeAbl';
  }

  findAll() {
    return `This action returns all pokeAbl`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokeAbl`;
  }

  update(id: number, updatePokeAblDto: UpdatePokeAblDto) {
    return `This action updates a #${id} pokeAbl`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokeAbl`;
  }
}
