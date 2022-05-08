import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KhtimonachitietService } from './khtimonachitiet.service';
import { CreateKhtimonachitietDto } from './dto/create-khtimonachitiet.dto';
import { UpdateKhtimonachitietDto } from './dto/update-khtimonachitiet.dto';

@Controller('khtimona/khtimonachitiet')
export class KhtimonachitietController {
  constructor(private readonly khtimonachitietService: KhtimonachitietService) {}

  @Post()
  create(@Body() createKhtimonachitietDto: CreateKhtimonachitietDto) {
    return this.khtimonachitietService.create(createKhtimonachitietDto);
  }

  @Get()
  findAll() {
    return this.khtimonachitietService.findAll();
  }
  @Get('paged')
  Loadmore(@Query('Chinhanh') Chinhanh: string) {
      return this.khtimonachitietService.findByChinhanh(Chinhanh);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKhtimonachitietDto: UpdateKhtimonachitietDto) {
    return this.khtimonachitietService.update(id, updateKhtimonachitietDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.khtimonachitietService.remove(id);
  }
}
