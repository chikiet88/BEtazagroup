import { Test, TestingModule } from '@nestjs/testing';
import { ThongkekhService } from './thongkekh.service';

describe('ThongkekhService', () => {
  let service: ThongkekhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThongkekhService],
    }).compile();

    service = module.get<ThongkekhService>(ThongkekhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
