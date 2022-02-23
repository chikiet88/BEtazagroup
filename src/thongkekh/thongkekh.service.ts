import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThongkekhDto } from './dto/create-thongkekh.dto';
import { UpdateThongkekhDto } from './dto/update-thongkekh.dto';
import { Thongkekh } from './entities/thongkekh.entity';

@Injectable()
export class ThongkekhService {
  constructor(
    @InjectRepository(Thongkekh)
    private ThongkekhRepository: Repository<Thongkekh>,
  ) {}
 async create(createThongkekhDto: CreateThongkekhDto) {
    this.ThongkekhRepository.create(createThongkekhDto);
    return await this.ThongkekhRepository.save(createThongkekhDto);
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
