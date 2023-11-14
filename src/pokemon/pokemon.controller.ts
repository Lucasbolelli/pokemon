import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpException} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ErrorDto } from 'src/utils/dto/general.dto';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Endpoint de usuários')
@ApiBadRequestResponse({ description: 'Bad Request', type: ErrorDto})

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @Get('/:name')
  async findByName(@Param('name') name: string) : Promise<any> { {
      return this.pokemonService.finByName(name).then((result) => {
          console.log(result);
          
      }).catch((error) => {
          throw new HttpException( error.message, error.status );
      });
  }
  }
  
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}
