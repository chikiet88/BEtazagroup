import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { SectionEntity } from './entities/section.entity';
@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(SectionEntity)
    private SectionRepository: Repository<SectionService>,
  ) {}
  async create(createSectionDto: CreateSectionDto) {
    this.SectionRepository.create(createSectionDto);
    return await this.SectionRepository.save(createSectionDto);
  }
  async findAll() {
    return await this.SectionRepository.find();
  }
  async findOne(id: string) {
    return await this.SectionRepository.findOne({ where: { id: id } });
  }
  async findLoai(Loai:string) {
    return await this.SectionRepository.find({ where: { Loai: Loai} });
  }
  async update(id: string, updateSectionDto: UpdateSectionDto) {
    await this.SectionRepository.update(id, updateSectionDto);
    return await this.SectionRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.SectionRepository.delete(id);
    return { deleted: true };
  }
}
