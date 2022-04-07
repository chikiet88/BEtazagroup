import { Injectable } from '@nestjs/common';
import { CreateBaivietDto } from './dto/create-baiviet.dto';
import { UpdateBaivietDto } from './dto/update-baiviet.dto';

@Injectable()
export class BaivietService {
  create(createBaivietDto: CreateBaivietDto) {
    return 'This action adds a new baiviet';
  }

  findAll() {
    return `This action returns all baiviet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} baiviet`;
  }

  update(id: number, updateBaivietDto: UpdateBaivietDto) {
    return `This action updates a #${id} baiviet`;
  }

  remove(id: number) {
    return `This action removes a #${id} baiviet`;
  }
}
