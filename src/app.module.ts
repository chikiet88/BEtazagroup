import { Module } from '@nestjs/common';
import { TypeOrmModule  } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CauhinhModule } from './cauhinh/cauhinh.module';
import { TuyendungModule } from './tuyendung/tuyendung.module';

@Module({
  imports: 
  [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '103.221.222.71',
    port: 3306,
    username: 'tazaspac_chikiet',
    password: '@Hikiet88',
    database: 'tazaspac_v2tazagroup',
    charset: 'UTF8_GENERAL_CI',
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: true
  }), UsersModule, AuthModule, CauhinhModule, TuyendungModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}