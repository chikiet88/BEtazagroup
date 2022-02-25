import { Module } from '@nestjs/common';
import { ThongkekhService } from './thongkekh.service';
import { ThongkekhController } from './thongkekh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Khachhang1 } from './entities/thongkekh.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Khachhang1])],
  controllers: [ThongkekhController],
  providers: [ThongkekhService]
})
export class ThongkekhModule {}
