import { Controller} from '@nestjs/common';
import { PokeAtkService } from './poke_atk.service';

@Controller('poke-atk')
export class PokeAtkController {
  constructor(private readonly pokeAtkService: PokeAtkService) {}

}
