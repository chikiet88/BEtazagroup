import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DanhmucauhoithuonggapService } from './danhmucauhoithuonggap.service';
import { CreateDanhmucauhoithuonggapDto } from './dto/create-danhmucauhoithuonggap.dto';
import { UpdateDanhmucauhoithuonggapDto } from './dto/update-danhmucauhoithuonggap.dto';

@Controller('danhmucauhoithuonggap')
export class DanhmucauhoithuonggapController {
  constructor(private readonly danhmucauhoithuonggapService: DanhmucauhoithuonggapService) {}

  @Post()
  create(@Body() createDanhmucauhoithuonggapDto: CreateDanhmucauhoithuonggapDto) {
    return this.danhmucauhoithuonggapService.create(createDanhmucauhoithuonggapDto);
  }

  @Get()
  findAll() {
    return this.danhmucauhoithuonggapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.danhmucauhoithuonggapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDanhmucauhoithuonggapDto: UpdateDanhmucauhoithuonggapDto) {
    return this.danhmucauhoithuonggapService.update(+id, updateDanhmucauhoithuonggapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.danhmucauhoithuonggapService.remove(+id);
  }
}
