import { Test, TestingModule } from '@nestjs/testing';
import { TuyendungService } from './tuyendung.service';

describe('TuyendungService', () => {
  let service: TuyendungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuyendungService],
    }).compile();

    service = module.get<TuyendungService>(TuyendungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
