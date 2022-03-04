import { Test, TestingModule } from '@nestjs/testing';
import { LichhopController } from './lichhop.controller';
import { LichhopService } from './lichhop.service';

describe('LichhopController', () => {
  let controller: LichhopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LichhopController],
      providers: [LichhopService],
    }).compile();

    controller = module.get<LichhopController>(LichhopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
