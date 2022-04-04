import { Test, TestingModule } from '@nestjs/testing';
import { DanhmucauhoithuonggapService } from './danhmucauhoithuonggap.service';

describe('DanhmucauhoithuonggapService', () => {
  let service: DanhmucauhoithuonggapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DanhmucauhoithuonggapService],
    }).compile();

    service = module.get<DanhmucauhoithuonggapService>(DanhmucauhoithuonggapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
