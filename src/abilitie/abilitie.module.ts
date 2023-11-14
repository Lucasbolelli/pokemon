import { Module } from '@nestjs/common';
import { AbilitieService } from './abilitie.service';
import { AbilitieController } from './abilitie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abilitie } from './entities/abilitie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Abilitie])],
  controllers: [AbilitieController],
  providers: [AbilitieService]
})
export class AbilitieModule {}
