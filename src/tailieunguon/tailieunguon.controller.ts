import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TailieunguonService } from './tailieunguon.service';
import { CreateTailieunguonDto } from './dto/create-tailieunguon.dto';
import { UpdateTailieunguonDto } from './dto/update-tailieunguon.dto';

@Controller('tailieunguon')
export class TailieunguonController {
  constructor(private readonly tailieunguonService: TailieunguonService) {}

  @Post()
  create(@Body() createTailieunguonDto: CreateTailieunguonDto) {
    return this.tailieunguonService.create(createTailieunguonDto);
  }

  @Get()
  findAll() {
    return this.tailieunguonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tailieunguonService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTailieunguonDto: UpdateTailieunguonDto) {
    return this.tailieunguonService.update(id, updateTailieunguonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tailieunguonService.remove(id);
  }
}
