import { Controller, Get, Param, Delete } from '@nestjs/common';
import { AttackService } from './attack.service';



@Controller('attack')
export class AttackController {
  constructor(private readonly attackService: AttackService) {}

  @Get()
  findAll() {
    return this.attackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attackService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attackService.remove(+id);
  }
}
