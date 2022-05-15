import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCauhoithuonggapDto } from './dto/create-cauhoithuonggap.dto';
import { UpdateCauhoithuonggapDto } from './dto/update-cauhoithuonggap.dto';
import { CauhoithuonggapEntity } from './entities/cauhoithuonggap.entity';

@Injectable()
export class CauhoithuonggapService {
  constructor(
    @InjectRepository(CauhoithuonggapEntity)
    private CauhoiRepository: Repository<CauhoithuonggapService>,
  ) {}
  async create(createCauhoithuonggapDto: CreateCauhoithuonggapDto) {
    this.CauhoiRepository.create(createCauhoithuonggapDto);
    return await this.CauhoiRepository.save(createCauhoithuonggapDto);
  }
  async findAll() {
    return await this.CauhoiRepository.find();
  }
  async findOne(id: string) {
    return await this.CauhoiRepository.findOne({ where: { id: id } });
  }
  async update(id: string, updateCauhoithuonggapDto: UpdateCauhoithuonggapDto) {
    await this.CauhoiRepository.update(id, updateCauhoithuonggapDto);
    return await this.CauhoiRepository.findOne({ where: { id: id } });
  }
  async remove(id: string) {
    await this.CauhoiRepository.delete(id);
    return { deleted: true };
  }
}
