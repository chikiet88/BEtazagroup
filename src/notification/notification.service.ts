import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, map, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateNotificationDto, CreateSubscriberDto } from './dto/create-notification.dto';
import { UpdateNotificationDto, UpdateSubscriberDto } from './dto/update-notification.dto';
import { NotificatioEntity, SubscriberEntity } from './entities/notification.entity';
const webpush = require('web-push');
const vapidKeys = {
    "publicKey":"BJe-03OtBqwjGbpangu282m8R_E5qtjanOUANBF-ID37Fq-V2hZoOJ5hZJlW0qeXt0prcfIsu63gNQ_xmXPCE3M",
    "privateKey":"zLRVEtYggf-sYOJmkhdFp3-pMD67V9DhASO0xLR-QDw"
};
webpush.setVapidDetails(
    'mailto:admin@tazagroup.vn',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);
@Injectable()
export class NotificationService {

  constructor(
    @InjectRepository(NotificatioEntity)
    private NotificatiRepository: Repository<NotificationService>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    this.NotificatiRepository.create(createNotificationDto);
    return await this.NotificatiRepository.save(createNotificationDto);
  }

  async findAll() {
    return await this.NotificatiRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} notification`;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    await this.NotificatiRepository.update(id, updateNotificationDto);
    return await this.NotificatiRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.NotificatiRepository.delete(id);
    return { deleted: true };
  } 
}
@Injectable()
export class SubscriberService {

  constructor(
    @InjectRepository(SubscriberEntity)
    private SubscriberRepository: Repository<SubscriberService>,
  ) {}

  async create(data: CreateSubscriberDto) {
    this.SubscriberRepository.create(data);
    return await this.SubscriberRepository.save(data);
  }
  async sendTest() {
      const notificationPayload = {
      "notification": {
          "title": "Angular News",
          "body": "Newsletter Available!",
          "icon": "assets/main-page-logo-small-hat.png",
          "vibrate": [100, 50, 100],
          "data": {
              "dateOfArrival": Date.now(),
              "primaryKey": 1
          },
          "actions": [{
              "action": "explore",
              "title": "Go to the site"
          }]
      }
   }; 
  const user = await this.findAll();
    user.forEach(v => {
    console.error(v['Subscription'])
    webpush.sendNotification(v['Subscription'], JSON.stringify(notificationPayload))});
  return user  
  }
  async sendnoti(data) {
    console.error(data);
      const notificationPayload = {
      "notification": {
          "title": data.Tieude,
          "body": data.Noidung,
          "icon": "https://v2.tazagroup.vn/assets/images/logo/logo.png",
          "vibrate": [100, 50, 100],
          "data": {
              "onActionClick": {
                "default": {"operation": "openWindow", "url": data.Lienket}
              },
              "dateOfArrival": Date.now(),
              "primaryKey": 1,
          },
          "actions": [{
              "action": "explore",
              "title": "Xem Tin",
              "url":data.Lienket,
          }]
      }
   }; 
  const user = await this.findByid(data.idTo);
  console.error(user);
    user.forEach(v => {
    webpush.sendNotification(v['Subscription'], JSON.stringify(notificationPayload))});
  }
  async findAll() {
    return await this.SubscriberRepository.find();
  }
  async findByid(id) {
    return await this.SubscriberRepository.find({ where: { idUser: id } });
  }

  findOne(id: string) {
    return `This action returns a #${id} notification`;
  }

  async update(id: string, data: UpdateSubscriberDto) {
    await this.SubscriberRepository.update(id, data);
    return await this.SubscriberRepository.findOne({ where: { id: id } });
  }

  remove(id: string) {
    return `This action removes a #${id} notification`;
  }
  
}
