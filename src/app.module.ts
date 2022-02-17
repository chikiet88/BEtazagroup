import { Module } from '@nestjs/common';
import { TypeOrmModule  } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CauhinhModule } from './cauhinh/cauhinh.module';

@Module({
  imports: 
  [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '103.221.222.71',
    port: 3306,
    username: 'tazaspac_chikiet',
    password: '@Hikiet88',
    database: 'tazaspac_v2tazagroup',
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: true
  }), UsersModule, AuthModule, CauhinhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}