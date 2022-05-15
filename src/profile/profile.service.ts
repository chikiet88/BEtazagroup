import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private ProfileRepository: Repository<ProfileService>,
  ) {}
  async create(createProfileDto: CreateProfileDto) {
    this.ProfileRepository.create(createProfileDto);
    return await this.ProfileRepository.save(createProfileDto);
  }
  async findAll() {
    return await this.ProfileRepository.find();
  }
  async findOne(id: string) {
    return await this.ProfileRepository.findOne({ where: { id: id } });
  }
  async findByuser(id: string) {
    return await this.ProfileRepository.findOne({ where: { idUser: id } });
  }
  async update(id: string, updateProfileDto: UpdateProfileDto) {
    await this.ProfileRepository.update(id, updateProfileDto);
    return await this.ProfileRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.ProfileRepository.delete(id);
    return { deleted: true };
  }
}
