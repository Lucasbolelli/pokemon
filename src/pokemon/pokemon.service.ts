import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonQuery } from './pokemon.query';

@Injectable()
export class PokemonService {

  constructor(@InjectRepository(Pokemon)
                    private readonly pokemonRepository: Repository<Pokemon>,
                    private entityManager: EntityManager) {}

  findAll() {
    return this.pokemonRepository.find();
  }

  findOne(id: number) {
    return this.pokemonRepository.findOne({where:{id:id}});
  }

  remove(id: number) {
    return this.pokemonRepository.delete(id);
  }
  async finByName(name: string): Promise<any>{
      try {
          return this.entityManager.query(PokemonQuery.findByName(name))
      } catch (error) {
          throw new HttpException('status', HttpStatus.BAD_REQUEST);
      }      
  }
}
