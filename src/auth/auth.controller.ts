import {Controller, Get, Post, Patch,Delete,Body,Param,HttpStatus} from '@nestjs/common';
import { UsersDTO } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    //@UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() data: UsersDTO) {
        const result = await this.authService.authentication(data.email,data.password);   
   //  return this.authService.authentication(data.email,data.password);
   //return result;
     return {
        statusCode: HttpStatus.OK,
        message: 'Đăng Nhập Thành Công',
        result
      };
    }
 }
