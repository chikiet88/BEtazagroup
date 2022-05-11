import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateGrouptaskDto } from './dto/create-grouptask.dto';
import { UpdateGrouptaskDto } from './dto/update-grouptask.dto';
import { GrouptaskEntity } from './entities/grouptask.entity';
@Injectable()
export class GrouptaskService {
  constructor(
    @InjectRepository(GrouptaskEntity)
    private GrouptaskRepository: Repository<GrouptaskService>,
  ) {}
  async create(createGrouptaskDto: CreateGrouptaskDto) {
    this.GrouptaskRepository.create(createGrouptaskDto);
    return await this.GrouptaskRepository.save(createGrouptaskDto);
  }
  async findAll() {
    return await this.GrouptaskRepository.find();
  }
  async findOne(id: string) {
    return await this.GrouptaskRepository.findOne({ where: { id: id } });
  }
  async findLoai(Loai:string) {
    return await this.GrouptaskRepository.find({ where: { Loai: Loai} });
  }
  async update(id: string, updateGrouptaskDto: UpdateGrouptaskDto) {
    await this.GrouptaskRepository.update(id, updateGrouptaskDto);
    return await this.GrouptaskRepository.findOne({ where: { id: id } });
  }
  async remove(id: string) {
    await this.GrouptaskRepository.delete(id); 
    return { deleted: true };
  }
}
