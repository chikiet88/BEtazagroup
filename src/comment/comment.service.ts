import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private CommentRepository: Repository<CommentService>,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    this.CommentRepository.create(createCommentDto);
    return await this.CommentRepository.save(createCommentDto);
  }
  async findAll() {
    return await this.CommentRepository.find();
  }
  async findOne(id: string) {
    return await this.CommentRepository.findOne({ where: { id: id } });
  }
  async update(id: string, updateCommentDto: UpdateCommentDto) {
    await this.CommentRepository.update(id, updateCommentDto);
    return await this.CommentRepository.findOne({ where: { id: id } });
  }

  async remove(id: string) {
    await this.CommentRepository.delete(id);
    return { deleted: true };
  }
}
