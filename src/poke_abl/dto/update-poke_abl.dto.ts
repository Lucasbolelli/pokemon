import { PartialType } from '@nestjs/mapped-types';
import { CreatePokeAblDto } from './create-poke_abl.dto';

export class UpdatePokeAblDto extends PartialType(CreatePokeAblDto) {}
