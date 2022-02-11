import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersEntity } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}
    
      //function hash password
      async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 12);
      }
      
     //function compare password param with user password in database
      async comparePassword(
        password: string,
        storePasswordHash: string,
      ): Promise<any> {
        return await bcrypt.compare(password, storePasswordHash);
      }
    
      async authentication(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        const check = await this.comparePassword(password, user.password);
        if (!user || !check) {
          return false;
        }
        return this.login(user);
        //return user;
      }
      async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        const check = await this.comparePassword(password, user.password);
        if (user && check) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload:any = {
          name: user.name,
          email: user.email,
        };
      return { access_token: this.jwtService.sign(payload),user };
      }

}
