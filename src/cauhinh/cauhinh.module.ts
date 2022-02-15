import { Module } from '@nestjs/common';
import { CauhinhService } from './cauhinh.service';
import { CauhinhController } from './cauhinh.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CauhinhsEntity } from './entities/cauhinh.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CauhinhsEntity])],
  controllers: [CauhinhController],
  providers: [CauhinhService]
})
export class CauhinhModule {}
