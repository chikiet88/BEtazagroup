import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ChitietService } from './chitiet.service';
import { CreateChitietDto } from './dto/create-chitiet.dto';
import { UpdateChitietDto } from './dto/update-chitiet.dto';

@Controller('khachhangs/chitiet')
export class ChitietController {
  constructor(private readonly chitietService: ChitietService) {}

  @Post()
  create(@Body() createChitietDto: CreateChitietDto) {
    return this.chitietService.create(createChitietDto);
  }
  @Get()
  findAll() {
    return this.chitietService.findAll();
  }
  @Get('count')
  findCount() {
    return this.chitietService.findCount();
  }
  @Get('paged')
  Loadmore(
    @Query('take') take: number,
    @Query('skip') skip: number,
    ) {
    return this.chitietService.findpaged(skip,take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chitietService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChitietDto: UpdateChitietDto) {
    return this.chitietService.update(+id, updateChitietDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chitietService.remove(+id);
  }
}
