import { Injectable } from '@nestjs/common';
import { CreatePokeAtkDto } from './dto/create-poke_atk.dto';
import { UpdatePokeAtkDto } from './dto/update-poke_atk.dto';

@Injectable()
export class PokeAtkService {
  create(createPokeAtkDto: CreatePokeAtkDto) {
    return 'This action adds a new pokeAtk';
  }

  findAll() {
    return `This action returns all pokeAtk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokeAtk`;
  }

  update(id: number, updatePokeAtkDto: UpdatePokeAtkDto) {
    return `This action updates a #${id} pokeAtk`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokeAtk`;
  }
}
