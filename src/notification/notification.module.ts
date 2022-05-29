import { Module } from '@nestjs/common';
import { NotificationService, SubscriberService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificatioEntity, SubscriberEntity } from './entities/notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificatioEntity,SubscriberEntity])],
  controllers: [NotificationController],
  providers: [NotificationService,SubscriberService]
})
export class NotificationModule {}
