import { Test, TestingModule } from '@nestjs/testing';
import { KhtimonaService } from './khtimona.service';

describe('KhtimonaService', () => {
  let service: KhtimonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KhtimonaService],
    }).compile();

    service = module.get<KhtimonaService>(KhtimonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
