import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetitiveDto } from './create-competitive.dto';

export class UpdateCompetitiveDto extends PartialType(CreateCompetitiveDto) {}
