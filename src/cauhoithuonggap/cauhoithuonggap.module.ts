import { Module } from '@nestjs/common';
import { CauhoithuonggapService } from './cauhoithuonggap.service';
import { CauhoithuonggapController } from './cauhoithuonggap.controller';

@Module({
  controllers: [CauhoithuonggapController],
  providers: [CauhoithuonggapService]
})
export class CauhoithuonggapModule {}
