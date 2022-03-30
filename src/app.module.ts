import { Module } from '@nestjs/common';
import { TypeOrmModule  } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CauhinhModule } from './cauhinh/cauhinh.module';
import { VetuyendungModule } from './vetuyendung/vetuyendung.module';
import { ThongkekhModule } from './thongkekh/thongkekh.module';
import { LichhopModule } from './lichhop/lichhop.module';
import { NotificationModule } from './notification/notification.module';
import { KhachhangModule } from './khachhangs/khachhang/khachhang.module';
import { ChitietModule } from './khachhangs/chitiet/chitiet.module';
import { NavigationModule } from './navigation/navigation.module';
import { CauhoithuonggapModule } from './cauhoithuonggap/cauhoithuonggap.module';

@Module({
  imports: 
  [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: '103.221.222.71',
    port: 3306,
    username: 'tazaspac_chikiet',
    password: '@Hikiet88',
    database: 'tazaspac_testblog',
    //database: 'tazaspac_v2tazagroup',
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: true,
    extra: {
      connectionLimit: 30
  }

  // TypeOrmModule.forRoot({
  //   type: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: '',
  //   database: 'test3',
  //   autoLoadEntities: true,
  //   synchronize: false,
  //   migrationsRun: true,
  //   extra: {
  //     connectionLimit: 30
  // }
  }), UsersModule, AuthModule, CauhinhModule, VetuyendungModule,ThongkekhModule, LichhopModule, NotificationModule, KhachhangModule, ChitietModule, NavigationModule, CauhoithuonggapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}