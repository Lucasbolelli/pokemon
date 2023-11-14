import { PartialType } from '@nestjs/swagger';
import { CreateAbilitieDto } from './create-abilitie.dto';

export class UpdateAbilitieDto extends PartialType(CreateAbilitieDto) {}
