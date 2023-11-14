import { Test, TestingModule } from '@nestjs/testing';
import { AbilitieService } from './abilitie.service';

describe('AbilitieService', () => {
  let service: AbilitieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbilitieService],
    }).compile();

    service = module.get<AbilitieService>(AbilitieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
