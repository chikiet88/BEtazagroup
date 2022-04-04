import { Module } from '@nestjs/common';
import { DanhmucauhoithuonggapService } from './danhmucauhoithuonggap.service';
import { DanhmucauhoithuonggapController } from './danhmucauhoithuonggap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DanhmucauhoithuonggapEntity } from './entities/danhmucauhoithuonggap.entity';

@Module({
  imports:[TypeOrmModule.forFeature([(DanhmucauhoithuonggapEntity)])],
  controllers: [DanhmucauhoithuonggapController],
  providers: [DanhmucauhoithuonggapService]
})
export class DanhmucauhoithuonggapModule {}
