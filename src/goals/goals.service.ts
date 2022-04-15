import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { GoalEntity } from './entities/goal.entity';
@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(GoalEntity)
    private GoalRepository: Repository<GoalsService>,
  ) {}
  async create(createGoalDto: CreateGoalDto) {
    this.GoalRepository.create(createGoalDto);
    return await this.GoalRepository.save(createGoalDto);
  }
  async findAll() {
    return await this.GoalRepository.find();
  }
  async findOne(id: string) {
    return await this.GoalRepository.findOne({ where: { id: id } });
  }
  async update(id: string, updateGoalDto: UpdateGoalDto) {
    await this.GoalRepository.update(id, updateGoalDto);
    return await this.GoalRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.GoalRepository.delete(id);
    return { deleted: true };
  }
}
