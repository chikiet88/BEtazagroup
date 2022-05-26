import { PartialType } from '@nestjs/mapped-types';
import { CreateTailieunguonDto } from './create-tailieunguon.dto';

export class UpdateTailieunguonDto extends PartialType(CreateTailieunguonDto) {}
