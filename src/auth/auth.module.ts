import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]),UsersModule,PassportModule,   
  JwtModule.register({
    secret: 'tazagroup.vn',
    signOptions: { expiresIn: '30d' },
  }),],
  providers: [AuthService,UsersService,LocalStrategy,JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
