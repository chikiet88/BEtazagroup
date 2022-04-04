import { Module } from '@nestjs/common';
import { KhtimonachitietService } from './khtimonachitiet.service';
import { KhtimonachitietController } from './khtimonachitiet.controller';
import { KhtimonachitietEntity } from './entities/khtimonachitiet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([KhtimonachitietEntity])],
  controllers: [KhtimonachitietController],
  providers: [KhtimonachitietService]
})
export class KhtimonachitietModule {}
