import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
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
    return await this.KhachhangRepository.find();
  }
  async findByChinhanh(Chinhanh: string) {
    return await this.KhachhangRepository.find(
      { where :{Chinhanh:Chinhanh}}
    );
  }
  async findBySDT(SDT: string) {
    return await this.KhachhangRepository.find(
      { where :{SDT:SDT}}
    );
  }
  async findByTenKH(TenKH: string) {
    return await this.KhachhangRepository.find(
      { where :{TenKH: Like(TenKH)}}

    );
  }
  
  update(id: number, updateKhachhangDto: UpdateKhachhangDto) {
    return `This action updates a #${id} khachhang`;
  }

  remove(id: number) {
    return `This action removes a #${id} khachhang`;
  }
}
