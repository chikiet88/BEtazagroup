import { Test, TestingModule } from '@nestjs/testing';
import { GrouptaskController } from './grouptask.controller';
import { GrouptaskService } from './grouptask.service';

describe('GrouptaskController', () => {
  let controller: GrouptaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrouptaskController],
      providers: [GrouptaskService],
    }).compile();

    controller = module.get<GrouptaskController>(GrouptaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
