import { PartialType } from '@nestjs/mapped-types';
import { CreateDanhmucauhoithuonggapDto } from './create-danhmucauhoithuonggap.dto';

export class UpdateDanhmucauhoithuonggapDto extends PartialType(CreateDanhmucauhoithuonggapDto) {}
