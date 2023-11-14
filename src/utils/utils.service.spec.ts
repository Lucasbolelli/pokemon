import { Test, TestingModule } from '@nestjs/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
    let service: UtilsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
                providers: [UtilsService],
            }).compile();

        service = module.get<UtilsService>(UtilsService);
    });

    it('Should be defined!', () => {
        expect(service).toBeDefined();
    });
});
