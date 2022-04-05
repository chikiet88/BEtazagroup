import { Module } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { ChangelogController } from './changelog.controller';
import { ChangelogEntity } from './entities/changelog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([(ChangelogEntity)])],
  controllers: [ChangelogController],
  providers: [ChangelogService]
})
export class ChangelogModule {}
