import { Test, TestingModule } from '@nestjs/testing';
import { TuyendungController } from './tuyendung.controller';
import { TuyendungService } from './tuyendung.service';

describe('TuyendungController', () => {
  let controller: TuyendungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuyendungController],
      providers: [TuyendungService],
    }).compile();

    controller = module.get<TuyendungController>(TuyendungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
