import { Test, TestingModule } from '@nestjs/testing';
import { ThongkekhController } from './thongkekh.controller';
import { ThongkekhService } from './thongkekh.service';

describe('ThongkekhController', () => {
  let controller: ThongkekhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThongkekhController],
      providers: [ThongkekhService],
    }).compile();

    controller = module.get<ThongkekhController>(ThongkekhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
