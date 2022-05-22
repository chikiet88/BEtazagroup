import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { UploadEntity } from './entities/upload.entity';
@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(UploadEntity)
    private UploadRepository: Repository<UploadService>,
  ) {}
  async create(createUploadDto: CreateUploadDto) {
    this.UploadRepository.create(createUploadDto);
    return await this.UploadRepository.save(createUploadDto);
  }
  async findAll() {
    return await this.UploadRepository.find();
  }
  async findOne(id: string) {
    return await this.UploadRepository.findOne({ where: { id: id } });
  }
  async update(id: string, updateUploadDto: UpdateUploadDto) {
    await this.UploadRepository.update(id, updateUploadDto);
    return await this.UploadRepository.findOne({ where: { id: id } });
  }
  async remove(id: string) {
    await this.UploadRepository.delete(id);
    return { deleted: true };
  }
}
