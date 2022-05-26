import { Module } from '@nestjs/common';
import { TailieunguonService } from './tailieunguon.service';
import { TailieunguonController } from './tailieunguon.controller';
import { TailieunguonEntity } from './entities/tailieunguon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([(TailieunguonEntity)])],
  controllers: [TailieunguonController],
  providers: [TailieunguonService]
})
export class TailieunguonModule {}
