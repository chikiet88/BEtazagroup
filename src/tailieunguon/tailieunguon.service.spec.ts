import { Test, TestingModule } from '@nestjs/testing';
import { TailieunguonService } from './tailieunguon.service';

describe('TailieunguonService', () => {
  let service: TailieunguonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TailieunguonService],
    }).compile();

    service = module.get<TailieunguonService>(TailieunguonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
