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

  async update(uuid: string, updateNavigationDto: UpdateNavigationDto) {
    await this.NavigationRepository.update(uuid, updateNavigationDto);
    return await this.findAll();
  }

  remove(id: number) {
    return `This action removes a #${id} navigation`;
  }
}
