import { Module } from '@nestjs/common';
import { KhtimonaService } from './khtimona.service';
import { KhtimonaController } from './khtimona.controller';
import { KhtimonaEntity } from './entities/khtimona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([KhtimonaEntity])],
  controllers: [KhtimonaController],
  providers: [KhtimonaService]
})
export class KhtimonaModule {}
