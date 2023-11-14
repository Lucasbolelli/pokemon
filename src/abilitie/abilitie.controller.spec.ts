import { Test, TestingModule } from '@nestjs/testing';
import { AbilitieController } from './abilitie.controller';
import { AbilitieService } from './abilitie.service';

describe('AbilitieController', () => {
  let controller: AbilitieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbilitieController],
      providers: [AbilitieService],
    }).compile();

    controller = module.get<AbilitieController>(AbilitieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
