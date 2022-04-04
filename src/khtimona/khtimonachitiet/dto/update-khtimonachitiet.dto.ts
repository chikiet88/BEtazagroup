import { PartialType } from '@nestjs/mapped-types';
import { CreateKhtimonachitietDto } from './create-khtimonachitiet.dto';

export class UpdateKhtimonachitietDto extends PartialType(CreateKhtimonachitietDto) {}
