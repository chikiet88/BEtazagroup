import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKhtimonaDto } from './dto/create-khtimona.dto';
import { UpdateKhtimonaDto } from './dto/update-khtimona.dto';
import { KhtimonaEntity } from './entities/khtimona.entity';

@Injectable()
export class KhtimonaService {

  constructor(
    @InjectRepository(KhtimonaEntity)
    private KhtimonaRepository: Repository<KhtimonaService>,
  ) {}
  async create(createKhtimonaDto: CreateKhtimonaDto) {
    this.KhtimonaRepository.create(createKhtimonaDto);
    return await this.KhtimonaRepository.save(createKhtimonaDto);
  }
  async findAll() {
    return await this.KhtimonaRepository.find();
  }
  async findByChinhanh(Chinhanh: string) {
    return await this.KhtimonaRepository.find(
      { where :{Chinhanh:Chinhanh}}
    );
  }
  async findBySDT(SDT: string) {
    console.log(SDT);
    
    return await this.KhtimonaRepository.find(
      { where :{SDT:SDT}}
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} khtimona`;
  }

  update(id: number, updateKhtimonaDto: UpdateKhtimonaDto) {
    return `This action updates a #${id} khtimona`;
  }

  remove(id: number) {
    return `This action removes a #${id} khtimona`;
  }
}
