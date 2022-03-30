import { PartialType } from '@nestjs/mapped-types';
import { CreateCauhoithuonggapDto } from './create-cauhoithuonggap.dto';

export class UpdateCauhoithuonggapDto extends PartialType(CreateCauhoithuonggapDto) {}
