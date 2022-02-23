import { Injectable } from '@nestjs/common';
import { CreateThongkekhDto } from './dto/create-thongkekh.dto';
import { UpdateThongkekhDto } from './dto/update-thongkekh.dto';

@Injectable()
export class ThongkekhService {
  create(createThongkekhDto: CreateThongkekhDto) {
    return 'This action adds a new thongkekh';
  }

  findAll() {
    return `This action returns all thongkekh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thongkekh`;
  }

  update(id: number, updateThongkekhDto: UpdateThongkekhDto) {
    return `This action updates a #${id} thongkekh`;
  }

  remove(id: number) {
    return `This action removes a #${id} thongkekh`;
  }
}
