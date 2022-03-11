import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificatioEntity } from './entities/notification.entity';

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

  remove(id: string) {
    return `This action removes a #${id} notification`;
  }
}
