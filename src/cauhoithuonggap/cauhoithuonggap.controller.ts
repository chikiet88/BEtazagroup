import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CauhoithuonggapService } from './cauhoithuonggap.service';
import { CreateCauhoithuonggapDto } from './dto/create-cauhoithuonggap.dto';
import { UpdateCauhoithuonggapDto } from './dto/update-cauhoithuonggap.dto';

@Controller('cauhoithuonggap')
export class CauhoithuonggapController {
  constructor(private readonly cauhoithuonggapService: CauhoithuonggapService) {}

  @Post()
  create(@Body() createCauhoithuonggapDto: CreateCauhoithuonggapDto) {
    return this.cauhoithuonggapService.create(createCauhoithuonggapDto);
  }

  @Get()
  findAll() {
    return this.cauhoithuonggapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cauhoithuonggapService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauhoithuonggapDto: UpdateCauhoithuonggapDto) {
    return this.cauhoithuonggapService.update(id, updateCauhoithuonggapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cauhoithuonggapService.remove(id);
  }
}
