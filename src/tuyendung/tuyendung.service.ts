import { Injectable } from '@nestjs/common';
import { CreateTuyendungDto } from './dto/create-tuyendung.dto';
import { UpdateTuyendungDto } from './dto/update-tuyendung.dto';

@Injectable()
export class TuyendungService {
  create(createTuyendungDto: CreateTuyendungDto) {
    return 'This action adds a new tuyendung';
  }

  findAll() {
    return `This action returns all tuyendung`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tuyendung`;
  }

  update(id: number, updateTuyendungDto: UpdateTuyendungDto) {
    return `This action updates a #${id} tuyendung`;
  }

  remove(id: number) {
    return `This action removes a #${id} tuyendung`;
  }
}
