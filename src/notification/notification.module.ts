import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificatioEntity } from './entities/notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificatioEntity])],
  controllers: [NotificationController],
  providers: [NotificationService]
})
export class NotificationModule {}
