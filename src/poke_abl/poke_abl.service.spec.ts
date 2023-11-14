import { Test, TestingModule } from '@nestjs/testing';
import { PokeAblService } from './poke_abl.service';

describe('PokeAblService', () => {
  let service: PokeAblService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokeAblService],
    }).compile();

    service = module.get<PokeAblService>(PokeAblService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
