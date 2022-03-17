import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildEntity, Repository } from 'typeorm';
import { CreateChitietDto } from './dto/create-chitiet.dto';
import { UpdateChitietDto } from './dto/update-chitiet.dto';
import { ChitietEntity } from './entities/chitiet.entity';
@Injectable()
export class ChitietService {
  constructor(
    @InjectRepository(ChitietEntity)
    private ChitietRepository: Repository<ChitietEntity>,
  ) {}
  async create(createChitietDto: CreateChitietDto) {
    this.ChitietRepository.create(createChitietDto);
    return await this.ChitietRepository.save(createChitietDto);
  }
  async findAll() {
    return await this.ChitietRepository.find();
    // return await this.ChitietRepository.find({ 
    //   take:1000,
    //   skip:0 });
  }
  async findpaged(skip:number=0,take: number = 10) {
    const [data, total] = await this.ChitietRepository.findAndCount(
      { 
        take:take,
        skip:skip }
      );
    return { data, total };
  }
  async findCount() {
    return await this.ChitietRepository.findAndCount();
  }
  async findBySDT(SDT: string) {
    return await this.ChitietRepository.find(
      { where :{SDT:SDT}}
    );
  }

  update(id: number, updateChitietDto: UpdateChitietDto) {
    return `This action updates a #${id} chitiet`;
  }

  remove(id: number) {
    return `This action removes a #${id} chitiet`;
  }
}
