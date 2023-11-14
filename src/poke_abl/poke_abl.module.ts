import { Module } from '@nestjs/common';
import { PokeAblService } from './poke_abl.service';
import { PokeAblController } from './poke_abl.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokeAbl } from './entities/poke_abl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PokeAbl])],
  controllers: [PokeAblController],
  providers: [PokeAblService]
})
export class PokeAblModule {}
