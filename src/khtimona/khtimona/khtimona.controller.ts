import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KhtimonaService } from './khtimona.service';
import { CreateKhtimonaDto } from './dto/create-khtimona.dto';
import { UpdateKhtimonaDto } from './dto/update-khtimona.dto';

@Controller('khtimona/khachhang')
export class KhtimonaController {
  
  constructor(private readonly khtimonaService: KhtimonaService) {}

  @Post()
  create(@Body() createKhtimonaDto: CreateKhtimonaDto) {
    return this.khtimonaService.create(createKhtimonaDto);
  }

  @Get()
  findAll() {
    return this.khtimonaService.findAll();
  }
  @Get(':Chinhanh')
  findByChinhanh(@Param('Chinhanh') Chinhanh: string) {
    return this.khtimonaService.findByChinhanh(Chinhanh);
  }
  @Get('paged')
  Loadmore(@Query('SDT') SDT: string) {
      return this.khtimonaService.findBySDT(SDT);
  }
  @Get('clear')
  Clear() {
    return this.khtimonaService.ClearData();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.khtimonaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKhtimonaDto: UpdateKhtimonaDto) {
    return this.khtimonaService.update(+id, updateKhtimonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.khtimonaService.remove(+id);
  }
}
