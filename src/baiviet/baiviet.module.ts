import { Module } from '@nestjs/common';
import { BaivietService } from './baiviet.service';
import { BaivietController } from './baiviet.controller';

@Module({
  controllers: [BaivietController],
  providers: [BaivietService]
})
export class BaivietModule {}
