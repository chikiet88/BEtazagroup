import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, ChildEntity, Like, Repository } from 'typeorm';
import { CreateChitietDto } from './dto/create-chitiet.dto';
import { UpdateChitietDto } from './dto/update-chitiet.dto';
import { ChitietEntity } from './entities/chitiet.entity';
@Injectable()
export class ChitietService {
  constructor(
    @InjectRepository(ChitietEntity)
    private ChitietRepository: Repository<ChitietService>,
  ) {}
  async create(createChitietDto: CreateChitietDto) {
    this.ChitietRepository.create(createChitietDto);
    return await this.ChitietRepository.save(createChitietDto);
  }
  async findAll() {
    return await this.ChitietRepository.find();
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
  async findByDay(batdau,kethuc) {
    const bd = new Date(batdau);
    const kt = new Date(kethuc);
  return await this.ChitietRepository.find(
      { where :{NgayTaoDV: Between(bd, kt)}}
    );
  }
  async findByTenKH(TenKH: string) {
    return await this.ChitietRepository.find(
      { where :{TenKH: Like(TenKH)}}

    );
  }
  async findByChinhanh(Chinhanh: string) {
    return await this.ChitietRepository.find(
      { where :{Chinhanh: Chinhanh}}

    );
  }
  update(id: number, updateChitietDto: UpdateChitietDto) {
    return `This action updates a #${id} chitiet`;
  }
  async remove(id: string) {
    await this.ChitietRepository.delete(id);
    return { deleted: true };
  } 
}
