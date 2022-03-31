import { Module } from '@nestjs/common';
import { CauhoithuonggapService } from './cauhoithuonggap.service';
import { CauhoithuonggapController } from './cauhoithuonggap.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CauhoithuonggapEntity } from './entities/cauhoithuonggap.entity';

@Module({
  imports:[TypeOrmModule.forFeature([(CauhoithuonggapEntity)])],
  controllers: [CauhoithuonggapController],
  providers: [CauhoithuonggapService]
})
export class CauhoithuonggapModule {}
