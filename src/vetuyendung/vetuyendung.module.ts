import { Module } from '@nestjs/common';
import { VetuyendungService } from './vetuyendung.service';
import { VetuyendungController } from './vetuyendung.controller';
import { VetuyendungsEntity } from './entities/vetuyendung.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VetuyendungsEntity])],
  controllers: [VetuyendungController],
  providers: [VetuyendungService]
})
export class VetuyendungModule {}
