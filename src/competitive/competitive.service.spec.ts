import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { find } from 'rxjs';
import { Connection, Repository } from 'typeorm';
import { CompetitiveService } from './competitive.service';
import { Competitive } from './entities/competitive.entity';

type mockrepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock >>

const crudMockRepository = <T = any>(): mockrepository<T> => ({
  findOne: jest.fn(), 
  delete: jest.fn(),
  update: jest.fn().mockImplementation((id, dto)=> ({ id, ...dto})),
  find: jest.fn()
})
describe('CompetitiveService', () => {
  let service: CompetitiveService;
  let competitiveRepository: mockrepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitiveService,
      {provide: Connection, useValue: {} },
      {provide: getRepositoryToken(Competitive), useValue: crudMockRepository()}],
    }).compile();

    service = module.get<CompetitiveService>(CompetitiveService);
    competitiveRepository = module.get<mockrepository>(getRepositoryToken(Competitive));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('Buscar pelo id', () => {
      it('deve retornar o objeto competitive', async () => {
        const competitiveid = '1'
        const expectcompetitive = {}

        competitiveRepository.findOne.mockReturnValue(expectcompetitive)
        const competitive = await service.findOne(+competitiveid)
        expect(competitive).toEqual(expectcompetitive)
      })

      it('deve retornar NotFoundException',async () =>{
        const competitiveid = '1'

        try {
          await service.findOne(+competitiveid)

        } catch (error) {

          expect(error).toBeInstanceOf(NotFoundException)   
        }

      })
    })
  });

  describe('FindAll', () => {
    describe('deve encontrar todos', () => {
      it('deve encontrar todos os objetos', async () => {
        const expectcompetitive = {Number}

        competitiveRepository.find.mockReturnValue(expectcompetitive)
        const competitive = await service.findAll()
        expect(competitive).toEqual(expectcompetitive)
      })
    })
  });
  
  describe('delete', () => {
    describe('Deve deletar pelo id', () => {
      it('deve deletar o objeto competitive', async () => {
        const competitiveid = '1'
        const competitive = await service.remove(+competitiveid)
        expect(competitive).toBeUndefined()
      })
    })
  });

  describe('update', () => {
    describe('Deve Atualizar um registro', () => {
      it('Atualiza um objeto', async () => {
        const competitiveid = '1'
        const expectcompetitive = '2'
        const dataupdate = {}

        competitiveRepository.update.mockReturnValue(expectcompetitive)
        const competitive = await service.update(+competitiveid, dataupdate)
        expect(competitive).toBe(expectcompetitive)
      })
    })
  });

});
