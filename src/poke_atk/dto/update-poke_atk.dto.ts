import { PartialType } from '@nestjs/mapped-types';
import { CreatePokeAtkDto } from './create-poke_atk.dto';

export class UpdatePokeAtkDto extends PartialType(CreatePokeAtkDto) {}
