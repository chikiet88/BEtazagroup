import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { CreateNavigationDto } from './dto/create-navigation.dto';
import { UpdateNavigationDto } from './dto/update-navigation.dto';
import { NavigationEntity } from './entities/navigation.entity';

@Injectable()
export class NavigationService {
  constructor(
    @InjectRepository(NavigationEntity)
    private NavigationRepository: Repository<NavigationService>,
  ) {}

  async create(createNavigationDto: CreateNavigationDto) {
    this.NavigationRepository.create(createNavigationDto);
    return await this.NavigationRepository.save(createNavigationDto);
  }

  async findAll() {
    return await this.NavigationRepository.find();
  }

  async findOne(uuid: string) {
    return await this.NavigationRepository.find({where:{uuid:uuid}});
  }

  update(id: number, updateNavigationDto: UpdateNavigationDto) {
    return `This action updates a #${id} navigation`;
  }

  remove(id: number) {
    return `This action removes a #${id} navigation`;
  }
}
