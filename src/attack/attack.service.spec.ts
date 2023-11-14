import { Test, TestingModule } from '@nestjs/testing';
import { AttackService } from './attack.service';

describe('AttackService', () => {
  let service: AttackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttackService],
    }).compile();

    service = module.get<AttackService>(AttackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
