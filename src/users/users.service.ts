import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
import * as bcrypt from 'bcrypt';
    @Injectable()
    export class UsersService {
      [x: string]: any;
      constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
      ) {}

      async showAll() {
        return await this.usersRepository.find();
      }

      async setPassword(password: string) {
          const salt = await bcrypt.genSalt();
          return await bcrypt.hash(password, salt);
        }
      async create(data: UsersDTO) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
      }

      async findByEmail(email: string): Promise<UsersDTO> {
         return await this.usersRepository.findOne({
          where: {
            email: email,
          },
        });
      }

      async read(id: number) {
        return await this.usersRepository.findOne({ where: { id: id } });
      }

      async update(id: number, data: Partial<UsersDTO>) {
        await this.usersRepository.update({ id }, data);
        return await this.usersRepository.findOne({ id });
      }
      async destroy(id: number) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
      }
    }