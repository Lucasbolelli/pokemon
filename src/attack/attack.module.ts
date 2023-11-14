import { Module } from '@nestjs/common';
import { AttackService } from './attack.service';
import { AttackController } from './attack.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attack } from './entities/attack.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attack])],
  controllers: [AttackController],
  providers: [AttackService]
})
export class AttackModule {}
