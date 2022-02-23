import { PartialType } from '@nestjs/mapped-types';
import { CreateThongkekhDto } from './create-thongkekh.dto';

export class UpdateThongkekhDto extends PartialType(CreateThongkekhDto) {}
