import { Test, TestingModule } from '@nestjs/testing';
import { DanhmucauhoithuonggapController } from './danhmucauhoithuonggap.controller';
import { DanhmucauhoithuonggapService } from './danhmucauhoithuonggap.service';

describe('DanhmucauhoithuonggapController', () => {
  let controller: DanhmucauhoithuonggapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DanhmucauhoithuonggapController],
      providers: [DanhmucauhoithuonggapService],
    }).compile();

    controller = module.get<DanhmucauhoithuonggapController>(DanhmucauhoithuonggapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
