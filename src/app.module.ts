import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '45.252.250.11',
    port: 3306,
    username: 'owtrjssx_chikiet8',
    password: '@hikiet88',
    database: 'owtrjssx_tazagroup.vn',
    autoLoadEntities: true,
    synchronize: false,
    migrationsRun: false
  }), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}