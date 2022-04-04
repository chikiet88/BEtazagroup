import { Test, TestingModule } from '@nestjs/testing';
import { KhtimonachitietService } from './khtimonachitiet.service';

describe('KhtimonachitietService', () => {
  let service: KhtimonachitietService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KhtimonachitietService],
    }).compile();

    service = module.get<KhtimonachitietService>(KhtimonachitietService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
