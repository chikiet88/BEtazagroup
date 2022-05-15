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
      async comparePassword(
        password: string,
        storePasswordHash: string,
      ): Promise<any> {
        return await bcrypt.compare(password, storePasswordHash);
      }
    
    async authentication(SDT: string, password: string): Promise<any> {
        const user = await this.usersService.findBySDT(SDT);
        if (!user) {
          return 1;
        }
        const check = await this.comparePassword(password, user.password);
        if (!check) {
          return 2;
        }

       else { return this.login(user);}
      }
      async changepass(data): Promise<any>{
        const user = await this.usersService.findBySDT(data.user.SDT);
        const check = await this.comparePassword(data.oldpass, user.password);
        if (!check) {
          return 1;
        }
        else
        {
          user.password  = await this.usersService.setPassword(data.newpass);
          return await this.usersService.update(user.id,user);
        }
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
          SDT: user.SDT,
          email: user.email,
        };  
      return { access_token: this.jwtService.sign(payload),user };
      }
      async signbytoken(token: any) {
        try {
          return await this.jwtService.verify(token.access_token);
        } catch (error) {
          return false;
        }

      }
}
