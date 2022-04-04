import { PartialType } from '@nestjs/mapped-types';
import { CreateKhtimonaDto } from './create-khtimona.dto';

export class UpdateKhtimonaDto extends PartialType(CreateKhtimonaDto) {}
