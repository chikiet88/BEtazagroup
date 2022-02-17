import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuyendungService } from './tuyendung.service';
import { CreateTuyendungDto } from './dto/create-tuyendung.dto';
import { UpdateTuyendungDto } from './dto/update-tuyendung.dto';

@Controller('tuyendung')
export class TuyendungController {
  constructor(private readonly tuyendungService: TuyendungService) {}

  @Post()
  create(@Body() createTuyendungDto: CreateTuyendungDto) {
    return this.tuyendungService.create(createTuyendungDto);
  }

  @Get()
  findAll() {
    return this.tuyendungService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tuyendungService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTuyendungDto: UpdateTuyendungDto) {
    return this.tuyendungService.update(+id, updateTuyendungDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tuyendungService.remove(+id);
  }
}
