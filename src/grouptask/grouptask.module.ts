import { Module } from '@nestjs/common';
import { GrouptaskService } from './grouptask.service';
import { GrouptaskController } from './grouptask.controller';
import { GrouptaskEntity } from './entities/grouptask.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([(GrouptaskEntity)])],
  controllers: [GrouptaskController],
  providers: [GrouptaskService]
})
export class GrouptaskModule {}
