import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, In, Like, Repository } from 'typeorm';
import { CreateTailieunguonDto } from './dto/create-tailieunguon.dto';
import { UpdateTailieunguonDto } from './dto/update-tailieunguon.dto';
import { TailieunguonEntity } from './entities/tailieunguon.entity';
@Injectable()
export class TailieunguonService {
  constructor(
    @InjectRepository(TailieunguonEntity)
    private TailieunguonRepository: Repository<TailieunguonService>,
  ) {}
  async create(createTailieunguonDto: CreateTailieunguonDto) {
    this.TailieunguonRepository.create(createTailieunguonDto);
    return await this.TailieunguonRepository.save(createTailieunguonDto);
  }
  async findAll() {
    return await this.TailieunguonRepository.find();
  }
  async findOne(id: string) {
    return await this.TailieunguonRepository.findOne({ where: { id: id } });
  }
  async findbyUser(id: string) {
    return await this.TailieunguonRepository.find({
      where: [{idTao: id},{Thamgia: Like("%"+id+"%")}]
    });
  }
  async update(id: string, updateTailieunguonDto: UpdateTailieunguonDto) {
    await this.TailieunguonRepository.update(id, updateTailieunguonDto);
    return await this.TailieunguonRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.TailieunguonRepository.delete(id);
    return { deleted: true };
  }
}
