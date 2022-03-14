import { Injectable } from '@nestjs/common';
import { CreateKhachhangDto } from './dto/create-khachhang.dto';
import { UpdateKhachhangDto } from './dto/update-khachhang.dto';

@Injectable()
export class KhachhangService {
  create(createKhachhangDto: CreateKhachhangDto) {
    return 'This action adds a new khachhang';
  }

  findAll() {
    return `This action returns all khachhang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} khachhang`;
  }

  update(id: number, updateKhachhangDto: UpdateKhachhangDto) {
    return `This action updates a #${id} khachhang`;
  }

  remove(id: number) {
    return `This action removes a #${id} khachhang`;
  }
}
