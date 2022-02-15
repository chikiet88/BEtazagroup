import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCauhinhDto } from './dto/create-cauhinh.dto';
import { UpdateCauhinhDto } from './dto/update-cauhinh.dto';
import { CauhinhsEntity } from './entities/cauhinh.entity';

@Injectable()
export class CauhinhService {
  constructor(
    @InjectRepository(CauhinhsEntity)
    private CauhinhsRepository: Repository<CauhinhService>,
  ) {}
  async create(createCauhinhDto: CreateCauhinhDto) {
    const data = this.CauhinhsRepository.create(createCauhinhDto);
    await this.CauhinhsRepository.save(createCauhinhDto);
    return data;
  }

  async findAll() {
    return await this.CauhinhsRepository.find();
  }

  async findOne(id: number) {
    return await this.CauhinhsRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateCauhinhDto: UpdateCauhinhDto) {
    await this.CauhinhsRepository.update(id, updateCauhinhDto);
    return await this.CauhinhsRepository.findOne({ where: { id: id } });
  }

  async remove(id: number) {
    await this.CauhinhsRepository.delete(id);
    return { deleted: true };
  }
}
