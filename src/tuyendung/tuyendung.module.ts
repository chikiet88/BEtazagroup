import { Module } from '@nestjs/common';
import { TuyendungService } from './tuyendung.service';
import { TuyendungController } from './tuyendung.controller';

@Module({
  controllers: [TuyendungController],
  providers: [TuyendungService]
})
export class TuyendungModule {}
