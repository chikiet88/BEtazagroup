import { Module } from '@nestjs/common';
import { DanhmucService } from './danhmuc.service';
import { DanhmucController } from './danhmuc.controller';
import { DanhmucEntity } from './entities/danhmuc.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([(DanhmucEntity)])],
  controllers: [DanhmucController],
  providers: [DanhmucService]
})
export class DanhmucModule {}
