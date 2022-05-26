import { Test, TestingModule } from '@nestjs/testing';
import { TailieunguonController } from './tailieunguon.controller';
import { TailieunguonService } from './tailieunguon.service';

describe('TailieunguonController', () => {
  let controller: TailieunguonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TailieunguonController],
      providers: [TailieunguonService],
    }).compile();

    controller = module.get<TailieunguonController>(TailieunguonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
