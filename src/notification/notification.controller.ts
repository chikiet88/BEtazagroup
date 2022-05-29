import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationService, SubscriberService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { KeyObject } from 'crypto';
@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly subscriberService: SubscriberService
    ) {}
  @Post('subscriber')
  createSubscriber(@Body() data: CreateNotificationDto) {
    return this.subscriberService.create(data);
  }
  @Get('subscriber')
  getSubscriber() {
    return this.subscriberService.sendTest();
  }
  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    this.subscriberService.sendnoti(createNotificationDto);
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationService.remove(id);
  }
}
