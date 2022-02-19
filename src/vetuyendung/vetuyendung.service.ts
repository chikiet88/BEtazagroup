import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVetuyendungDto } from './dto/create-vetuyendung.dto';
import { UpdateVetuyendungDto } from './dto/update-vetuyendung.dto';
import { VetuyendungsEntity } from './entities/vetuyendung.entity';

@Injectable()
export class VetuyendungService {
  constructor(
    @InjectRepository(VetuyendungsEntity)
    private VetuyendungsRepository: Repository<VetuyendungService>,
  ) {}
  async create(createVetuyendungDto: CreateVetuyendungDto) {
   this.VetuyendungsRepository.create(createVetuyendungDto);
    return await this.VetuyendungsRepository.save(createVetuyendungDto);
  }

  async findAll() {
    return await this.VetuyendungsRepository.find();
  }

  async findOne(id: string) {
    return await this.VetuyendungsRepository.findOne({ where: { id: id } });
  }

  async update(id: string, updateVetuyendungDto: UpdateVetuyendungDto) {
    await this.VetuyendungsRepository.update(id, updateVetuyendungDto);
    return await this.VetuyendungsRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.VetuyendungsRepository.delete(id);
    return { deleted: true };
  }
}
