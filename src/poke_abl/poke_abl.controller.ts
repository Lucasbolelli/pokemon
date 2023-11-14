import { Controller} from '@nestjs/common';
import { PokeAblService } from './poke_abl.service';


@Controller('poke-abl')
export class PokeAblController {
  constructor(private readonly pokeAblService: PokeAblService) {}

}
