import { Module } from '@nestjs/common';
import { PokeAtkService } from './poke_atk.service';
import { PokeAtkController } from './poke_atk.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokeAtk } from './entities/poke_atk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokeAtk])],
  controllers: [PokeAtkController],
  providers: [PokeAtkService]
})
export class PokeAtkModule {}
