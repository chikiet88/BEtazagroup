import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKhachhangDto } from './dto/create-khachhang.dto';
import { UpdateKhachhangDto } from './dto/update-khachhang.dto';
import { KhachhangEntity } from './entities/khachhang.entity';

@Injectable()
export class KhachhangService {

  constructor(
    @InjectRepository(KhachhangEntity)
    private KhachhangRepository: Repository<KhachhangEntity>,
  ) {}
  async create(CreateKhachhangDto: CreateKhachhangDto) {
    this.KhachhangRepository.create(CreateKhachhangDto);
    return await this.KhachhangRepository.save(CreateKhachhangDto);
  }
  async findAll() {
    return await this.KhachhangRepository.find(
      {
          skip: 0,
          take: 100,
      }
      );
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
