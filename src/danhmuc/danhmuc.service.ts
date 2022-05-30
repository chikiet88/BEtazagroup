import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDanhmucDto } from './dto/create-danhmuc.dto';
import { UpdateDanhmucDto } from './dto/update-danhmuc.dto';
import { DanhmucEntity } from './entities/danhmuc.entity';

@Injectable()
export class DanhmucService {
  constructor(
    @InjectRepository(DanhmucEntity)
    private DanhmucRepository: Repository<DanhmucService>,
  ) {}
  async create(createDanhmucDto: CreateDanhmucDto) {
    this.DanhmucRepository.create(createDanhmucDto);
    return await this.DanhmucRepository.save(createDanhmucDto);
  }
  async findAll() {
    return await this.DanhmucRepository.find();
  }
  async findOne(id: string) {
    return await this.DanhmucRepository.findOne({ where: { id: id } });
  }
  async findByModule(id: string) {
    return await this.DanhmucRepository.find({ where: { Module: id } });
  }
  async update(id: string, updateDanhmucDto: UpdateDanhmucDto) {
    await this.DanhmucRepository.update(id, updateDanhmucDto);
    return await this.DanhmucRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.DanhmucRepository.delete(id);
    return { deleted: true };
  } 
}
