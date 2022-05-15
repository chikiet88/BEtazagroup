import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CauhinhModule } from './cauhinh/cauhinh.module';
import { VetuyendungModule } from './vetuyendung/vetuyendung.module';
import { LichhopModule } from './lichhop/lichhop.module';
import { NotificationModule } from './notification/notification.module';
import { KhachhangModule } from './khachhangs/khachhang/khachhang.module';
import { ChitietModule } from './khachhangs/chitiet/chitiet.module';
import { NavigationModule } from './navigation/navigation.module';
import { CauhoithuonggapModule } from './cauhoithuonggap/cauhoithuonggap.module';
import { KhtimonaModule } from './khtimona/khtimona/khtimona.module';
import { KhtimonachitietModule } from './khtimona/khtimonachitiet/khtimonachitiet.module';
import { DanhmucauhoithuonggapModule } from './danhmucauhoithuonggap/danhmucauhoithuonggap.module';
import { ChangelogModule } from './changelog/changelog.module';
import { BaivietModule } from './baiviet/baiviet.module';
import { DanhmucModule } from './danhmuc/danhmuc.module';
import { GoalsModule } from './goals/goals.module';
import { TasksModule } from './tasks/tasks.module';
import { SectionModule } from './section/section.module';
import { ProjectModule } from './project/project.module';
import { GrouptaskModule } from './grouptask/grouptask.module';
import { ProfileModule } from './profile/profile.module';
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
        },
        // logging: true,
        // logger: "file"
      }),
      UsersModule,
      AuthModule, 
      CauhinhModule,
      VetuyendungModule,
      LichhopModule,
      NotificationModule, 
      KhachhangModule, 
      ChitietModule,
      NavigationModule, 
      CauhoithuonggapModule,
      KhtimonaModule,
      KhtimonachitietModule,
      DanhmucauhoithuonggapModule,
      ChangelogModule,
      BaivietModule,
      DanhmucModule,
      GoalsModule,
      TasksModule,
      SectionModule,
      ProjectModule,
      GrouptaskModule,
      ProfileModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }