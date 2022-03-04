import { Module } from '@nestjs/common';
import { LichhopService } from './lichhop.service';
import { LichhopController } from './lichhop.controller';
import { Lichhop } from './entities/lichhop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Lichhop])],
  controllers: [LichhopController],
  providers: [LichhopService]

})
export class LichhopModule {}
