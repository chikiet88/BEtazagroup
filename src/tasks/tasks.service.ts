import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './entities/task.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private TaskRepository: Repository<TasksService>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    this.TaskRepository.create(createTaskDto);
    return await this.TaskRepository.save(createTaskDto);
  }
  async findAll() {
    return await this.TaskRepository.find();
  }
  async findOne(id: string) {
    return await this.TaskRepository.findOne({ where: { id: id } });
  }
  async findbyUser(id: string) {
    return await this.TaskRepository.find({ where: 
      [
        { idTao: id },
        { Thuchien: id }
      ]
    });
  }
  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.TaskRepository.update(id, updateTaskDto);
    return await this.TaskRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.TaskRepository.delete(id);
    return { deleted: true };
  }
}
