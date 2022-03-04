import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLichhopDto } from './dto/create-lichhop.dto';
import { UpdateLichhopDto } from './dto/update-lichhop.dto';
import { Lichhop } from './entities/lichhop.entity';

@Injectable()
export class LichhopService {
  constructor(
    @InjectRepository(Lichhop)
    private LichhopsRepository: Repository<LichhopService>,
  ) {}
  async create(createLichhopDto: CreateLichhopDto) {
    this.LichhopsRepository.create(createLichhopDto);
    return await this.LichhopsRepository.save(createLichhopDto);
  }

  async findAll() {
    return await this.LichhopsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lichhop`;
  }

  update(id: number, updateLichhopDto: UpdateLichhopDto) {
    return `This action updates a #${id} lichhop`;
  }

  remove(id: number) {
    return `This action removes a #${id} lichhop`;
  }
}
