import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
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
  async findWhere(id:string) {
    return await this.LichhopsRepository.findOne({
      where: [{Chutri: id},{Thamgia: In([id])}]
   })
  }
  async findOne(id: string) {
    return await this.LichhopsRepository.findOne({ where: { id: id } });
  }
  async update(id: string, updateLichhopDto: UpdateLichhopDto) {
    await this.LichhopsRepository.update(id, updateLichhopDto);
    return await this.LichhopsRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.LichhopsRepository.delete(id);
    return { deleted: true };
  }
}
