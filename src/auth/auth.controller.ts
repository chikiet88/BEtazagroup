import {Controller, Get, Post,Request, Patch,Delete,Body,Param,HttpStatus, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersDTO } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
      private authService: AuthService,
      private usersService: UsersService,
      
      ) {}
    //@UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() data: UsersDTO) {
      return await this.authService.authentication(data.SDT,data.password);   

    }
    @Post('signbytoken')
    async signbytoken(@Body() access_token: any) { 
      const check =  await this.authService.signbytoken(access_token);   
      if(check)
      {     
        const user = await this.usersService.findBySDT(check.SDT);
          if(user)
          {
            return user;
          }
          else return false;
      }
      else return false
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
      const user = await this.usersService.findBySDT(req.user.user.SDT);
      if(user)
      {
        return user;
      }
      else return false;
    }
 }
