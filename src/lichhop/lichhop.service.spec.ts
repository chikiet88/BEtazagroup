import { Test, TestingModule } from '@nestjs/testing';
import { LichhopService } from './lichhop.service';

describe('LichhopService', () => {
  let service: LichhopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LichhopService],
    }).compile();

    service = module.get<LichhopService>(LichhopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
