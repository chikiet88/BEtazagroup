import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';
@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private ProjectRepository: Repository<ProjectService>,
  ) {}
  async create(createProjectDto: CreateProjectDto) {
    this.ProjectRepository.create(createProjectDto);
    return await this.ProjectRepository.save(createProjectDto);
  }
  async findAll() {
    return await this.ProjectRepository.find();
  }
  async findOne(id: string) {
    return await this.ProjectRepository.findOne({ where: { id: id } });
  }
  async findbyUser(id: string) {
    return await this.ProjectRepository.find({ where: 
      [
        { idTao: id },
        {Thamgia: In([id])}
      ]
    });
  }
  async update(id: string, updateProjectDto: UpdateProjectDto) {
    await this.ProjectRepository.update(id, updateProjectDto);
    return await this.ProjectRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.ProjectRepository.delete(id);
    return { deleted: true };
  }
}
