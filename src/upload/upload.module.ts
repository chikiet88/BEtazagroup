import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UploadEntity } from './entities/upload.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([(UploadEntity)])],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}
