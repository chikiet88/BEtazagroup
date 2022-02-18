import { Test, TestingModule } from '@nestjs/testing';
import { VetuyendungController } from './vetuyendung.controller';
import { VetuyendungService } from './vetuyendung.service';

describe('VetuyendungController', () => {
  let controller: VetuyendungController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VetuyendungController],
      providers: [VetuyendungService],
    }).compile();

    controller = module.get<VetuyendungController>(VetuyendungController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
