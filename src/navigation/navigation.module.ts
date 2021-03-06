import { Module } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { NavigationController } from './navigation.controller';
import { NavigationEntity } from './entities/navigation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([NavigationEntity])],
  controllers: [NavigationController],
  providers: [NavigationService]
})
export class NavigationModule {}
