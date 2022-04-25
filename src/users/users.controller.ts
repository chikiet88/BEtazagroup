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
      return await this.usersService.showAll();
    }

    @Post()
    async createUsers(@Body() data: UsersDTO) {
      return await this.usersService.create(data);
    }

    @Get(':id')
    async readUser(@Param('id') id: string) {
      const data =  await this.usersService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data,
      };
    }

    @Patch(':id')
    async uppdateUser(@Param('id') id: string, @Body() data: Partial<UsersDTO>) {
      return await this.usersService.update(id, data);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
      await this.usersService.destroy(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }     
  }