import {Controller, Get, Post,Request, Patch,Delete,Body,Param,HttpStatus, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersDTO } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

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
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
 }
