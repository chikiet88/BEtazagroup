import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]),UsersModule,   
  JwtModule.register({
    secret: 'tazagroup.vn',
    signOptions: { expiresIn: '3600s' },
  }),],
  providers: [AuthService,UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
