import { Test, TestingModule } from '@nestjs/testing';
import { PokeAblController } from './poke_abl.controller';
import { PokeAblService } from './poke_abl.service';

describe('PokeAblController', () => {
  let controller: PokeAblController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokeAblController],
      providers: [PokeAblService],
    }).compile();

    controller = module.get<PokeAblController>(PokeAblController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
