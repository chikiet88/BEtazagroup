import { Test, TestingModule } from '@nestjs/testing';
import { VetuyendungService } from './vetuyendung.service';

describe('VetuyendungService', () => {
  let service: VetuyendungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VetuyendungService],
    }).compile();

    service = module.get<VetuyendungService>(VetuyendungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
