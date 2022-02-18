import { PartialType } from '@nestjs/mapped-types';
import { CreateVetuyendungDto } from './create-vetuyendung.dto';

export class UpdateVetuyendungDto extends PartialType(CreateVetuyendungDto) {}
