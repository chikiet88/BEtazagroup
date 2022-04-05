import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChangelogDto } from './dto/create-changelog.dto';
import { UpdateChangelogDto } from './dto/update-changelog.dto';
import { ChangelogEntity } from './entities/changelog.entity';

@Injectable()
export class ChangelogService {
  constructor(
    @InjectRepository(ChangelogEntity)
    private ChangelogRepository: Repository<ChangelogService>,
  ) {}
  async create(createChangelogDto: CreateChangelogDto) {
    this.ChangelogRepository.create(createChangelogDto);
    return await this.ChangelogRepository.save(createChangelogDto);
  }
  async findAll() {
    return await this.ChangelogRepository.find();
  }
  async findOne(id: string) {
    return await this.ChangelogRepository.findOne({ where: { id: id } });
  }
  async update(id: string, updateChangelogDto: UpdateChangelogDto) {
    await this.ChangelogRepository.update(id, updateChangelogDto);
    return await this.ChangelogRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.ChangelogRepository.delete(id);
    return { deleted: true };
  }
}
