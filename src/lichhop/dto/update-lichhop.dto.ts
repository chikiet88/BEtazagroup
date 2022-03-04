import { PartialType } from '@nestjs/mapped-types';
import { CreateLichhopDto } from './create-lichhop.dto';

export class UpdateLichhopDto extends PartialType(CreateLichhopDto) {}
