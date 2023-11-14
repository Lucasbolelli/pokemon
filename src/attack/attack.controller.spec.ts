import { Test, TestingModule } from '@nestjs/testing';
import { AttackController } from './attack.controller';
import { AttackService } from './attack.service';

describe('AttackController', () => {
  let controller: AttackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttackController],
      providers: [AttackService],
    }).compile();

    controller = module.get<AttackController>(AttackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
