import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LichhopService } from './lichhop.service';
import { CreateLichhopDto } from './dto/create-lichhop.dto';
import { UpdateLichhopDto } from './dto/update-lichhop.dto';

@Controller('lichhop')
export class LichhopController {
  constructor(private readonly lichhopService: LichhopService) {}

  @Post()
  create(@Body() createLichhopDto: CreateLichhopDto) {
    return this.lichhopService.create(createLichhopDto);
  }

  @Get()
  findAll() {
    return this.lichhopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lichhopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLichhopDto: UpdateLichhopDto) {
    return this.lichhopService.update(+id, updateLichhopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lichhopService.remove(+id);
  }
}
