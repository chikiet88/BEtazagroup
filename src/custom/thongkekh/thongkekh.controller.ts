import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThongkekhService } from './thongkekh.service';
import { CreateThongkekhDto } from './dto/create-thongkekh.dto';
import { UpdateThongkekhDto } from './dto/update-thongkekh.dto';

@Controller('thongkekh')
export class ThongkekhController {
  constructor(private readonly thongkekhService: ThongkekhService) {}

  @Post()
  create(@Body() createThongkekhDto: CreateThongkekhDto) {
    return this.thongkekhService.create(createThongkekhDto);
  }

  @Get()
  findAll() {
    return this.thongkekhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thongkekhService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThongkekhDto: UpdateThongkekhDto) {
    return this.thongkekhService.update(+id, updateThongkekhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thongkekhService.remove(+id);
  }
}
