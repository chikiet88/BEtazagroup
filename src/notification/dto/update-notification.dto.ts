import { PartialType } from '@nestjs/mapped-types';
import { CreateNotificationDto, CreateSubscriberDto } from './create-notification.dto';
export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
export class UpdateSubscriberDto extends PartialType(CreateSubscriberDto) {}
