import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbilitieService } from './abilitie.service';
import { CreateAbilitieDto } from './dto/create-abilitie.dto';
import { UpdateAbilitieDto } from './dto/update-abilitie.dto';

@Controller('abilitie')
export class AbilitieController {
  constructor(private readonly abilitieService: AbilitieService) {}

  @Post()
  create(@Body() createAbilitieDto: CreateAbilitieDto) {
    return this.abilitieService.create(createAbilitieDto);
  }

  @Get()
  findAll() {
    return this.abilitieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abilitieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbilitieDto: UpdateAbilitieDto) {
    return this.abilitieService.update(+id, updateAbilitieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abilitieService.remove(+id);
  }
}
