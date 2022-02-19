import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VetuyendungService } from './vetuyendung.service';
import { CreateVetuyendungDto } from './dto/create-vetuyendung.dto';
import { UpdateVetuyendungDto } from './dto/update-vetuyendung.dto';

@Controller('vetuyendung')
export class VetuyendungController {
  constructor(private readonly vetuyendungService: VetuyendungService) {}

  @Post()
  create(@Body() createVetuyendungDto: CreateVetuyendungDto) {
    return this.vetuyendungService.create(createVetuyendungDto);
  }

  @Get()
  findAll() {
    return this.vetuyendungService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vetuyendungService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVetuyendungDto: UpdateVetuyendungDto) {
    return this.vetuyendungService.update(id, updateVetuyendungDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vetuyendungService.remove(id);
  }
}
