import { Module } from '@nestjs/common';
import { CompetitiveService } from './competitive.service';
import { CompetitiveController } from './competitive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competitive } from './entities/competitive.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competitive])],
  controllers: [CompetitiveController],
  providers: [CompetitiveService]
})
export class CompetitiveModule {}
