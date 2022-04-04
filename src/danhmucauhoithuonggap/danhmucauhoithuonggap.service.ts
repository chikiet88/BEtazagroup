import { Injectable } from '@nestjs/common';
import { CreateDanhmucauhoithuonggapDto } from './dto/create-danhmucauhoithuonggap.dto';
import { UpdateDanhmucauhoithuonggapDto } from './dto/update-danhmucauhoithuonggap.dto';

@Injectable()
export class DanhmucauhoithuonggapService {
  create(createDanhmucauhoithuonggapDto: CreateDanhmucauhoithuonggapDto) {
    return 'This action adds a new danhmucauhoithuonggap';
  }

  findAll() {
    return `This action returns all danhmucauhoithuonggap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} danhmucauhoithuonggap`;
  }

  update(id: number, updateDanhmucauhoithuonggapDto: UpdateDanhmucauhoithuonggapDto) {
    return `This action updates a #${id} danhmucauhoithuonggap`;
  }

  remove(id: number) {
    return `This action removes a #${id} danhmucauhoithuonggap`;
  }
}
