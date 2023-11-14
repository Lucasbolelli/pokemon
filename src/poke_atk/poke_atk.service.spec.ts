import { Test, TestingModule } from '@nestjs/testing';
import { PokeAtkService } from './poke_atk.service';

describe('PokeAtkService', () => {
  let service: PokeAtkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokeAtkService],
    }).compile();

    service = module.get<PokeAtkService>(PokeAtkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
