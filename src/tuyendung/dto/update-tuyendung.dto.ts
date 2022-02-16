import { PartialType } from '@nestjs/mapped-types';
import { CreateTuyendungDto } from './create-tuyendung.dto';

export class UpdateTuyendungDto extends PartialType(CreateTuyendungDto) {}
