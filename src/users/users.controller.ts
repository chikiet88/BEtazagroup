import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
    HttpException,
  } from '@nestjs/common';

  import { UsersService } from './users.service';
  import { UsersDTO } from './users.dto';
import { NotiDTO } from './noti.dto';

  @Controller('users')
  export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('noti')
    async Pushnoti(@Body() data: NotiDTO) {
      const reuslt =  await this.usersService.Pushnoti(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Gửi Noti Thành Công',
        reuslt
      };
    }

    @Get()
    async showAllUsers() {
      const users =  await this.usersService.showAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        users
      };
    }

    @Post()
    async createUsers(@Body() data: UsersDTO) {
      const check = await this.validateSDT(data.SDT);
      if (check) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Số Điện Thoại Đã Tồn Tại',
        };
      }
      const check1 = await this.validateEmail(data.email);
      if (check1) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Email Đã Tồn Tại',
        };
      }    
      data.password = await this.usersService.setPassword(data.password);
      const user = await this.usersService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Tạo User Thành Công',
        user
      };
    }

    @Get(':id')
    async readUser(@Param('id') id: number) {
      const data =  await this.usersService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data,
      };
    }

    @Patch(':id')
    async uppdateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
      await this.usersService.update(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      await this.usersService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }

    async validateSDT(SDT: string) {
      try {
        const user = await this.usersService.findBySDT(SDT);
        return user;
      } catch (e) {
        return false;
      }
    }  
    async validateEmail(email: string) {
      try {
       const user = await this.usersService.findByEmail(email);
        return user;
      } catch (e) {
        return false;
      }
    }     
  }