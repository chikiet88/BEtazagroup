import { Module } from '@nestjs/common';
import { ThongkekhService } from './thongkekh.service';
import { ThongkekhController } from './thongkekh.controller';

@Module({
  controllers: [ThongkekhController],
  providers: [ThongkekhService]
})
export class ThongkekhModule {}
