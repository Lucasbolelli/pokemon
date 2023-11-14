import { Test, TestingModule } from '@nestjs/testing';
import { PokeAtkController } from './poke_atk.controller';
import { PokeAtkService } from './poke_atk.service';

describe('PokeAtkController', () => {
  let controller: PokeAtkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokeAtkController],
      providers: [PokeAtkService],
    }).compile();

    controller = module.get<PokeAtkController>(PokeAtkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
