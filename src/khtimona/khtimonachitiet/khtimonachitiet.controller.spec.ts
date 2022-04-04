import { Test, TestingModule } from '@nestjs/testing';
import { KhtimonachitietController } from './khtimonachitiet.controller';
import { KhtimonachitietService } from './khtimonachitiet.service';

describe('KhtimonachitietController', () => {
  let controller: KhtimonachitietController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhtimonachitietController],
      providers: [KhtimonachitietService],
    }).compile();

    controller = module.get<KhtimonachitietController>(KhtimonachitietController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
