import { Module } from '@nestjs/common';
import { ThongkekhService } from './thongkekh.service';
import { ThongkekhController } from './thongkekh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thongkekh } from './entities/thongkekh.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Thongkekh])],
  controllers: [ThongkekhController],
  providers: [ThongkekhService]
})
export class ThongkekhModule {}
