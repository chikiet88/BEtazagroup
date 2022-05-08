import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateKhtimonachitietDto } from './dto/create-khtimonachitiet.dto';
import { UpdateKhtimonachitietDto } from './dto/update-khtimonachitiet.dto';
import { KhtimonachitietEntity } from './entities/khtimonachitiet.entity';

@Injectable()
export class KhtimonachitietService {

  constructor(
    @InjectRepository(KhtimonachitietEntity)
    private KhtimonachitietRepository: Repository<KhtimonachitietService>,
  ) {}
  async create(CreateKhtimonachitietDto: CreateKhtimonachitietDto) {
    this.KhtimonachitietRepository.create(CreateKhtimonachitietDto);
    return await this.KhtimonachitietRepository.save(CreateKhtimonachitietDto);
  }
  async findAll() {
    return await this.KhtimonachitietRepository.find();
  }
  async findBySDT(SDT: string) {
    return await this.KhtimonachitietRepository.find(
      { where :{Chinhanh:SDT}}
    );
  }
  async findByChinhanh(Chinhanh: string) {
    return await this.KhtimonachitietRepository.find(
      { where :{Chinhanh:Chinhanh}}
    );
  }
  async findByTenKH(TenKH: string) {
    return await this.KhtimonachitietRepository.find(
      { where :{TenKH: Like(TenKH)}}
    );
  }
  
  update(id: number, updateKhtimonachitietDto: UpdateKhtimonachitietDto) {
    return `This action updates a #${id} Khtimonachitiet`;
  }

  remove(id: number) {
    return `This action removes a #${id} Khtimonachitiet`;
  }
}