import { Test, TestingModule } from '@nestjs/testing';
import { KhtimonaController } from './khtimona.controller';
import { KhtimonaService } from './khtimona.service';

describe('KhtimonaController', () => {
  let controller: KhtimonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhtimonaController],
      providers: [KhtimonaService],
    }).compile();

    controller = module.get<KhtimonaController>(KhtimonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
