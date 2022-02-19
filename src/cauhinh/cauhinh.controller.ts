import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { CauhinhService } from './cauhinh.service';
import { CreateCauhinhDto } from './dto/create-cauhinh.dto';
import { UpdateCauhinhDto } from './dto/update-cauhinh.dto';

@Controller('cauhinh')
export class CauhinhController {
  constructor(private readonly cauhinhService: CauhinhService) {}

  @Post()
  async create(@Body() CreateCauhinhDto: CreateCauhinhDto) {;
    const result = await this.cauhinhService.create(CreateCauhinhDto);
    if (result) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Tạo Mới Thành Công',
        result
    }
  }
}
  @Get()
  findAll() {
    return this.cauhinhService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cauhinhService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCauhinhDto: UpdateCauhinhDto) {
    return this.cauhinhService.update(id, updateCauhinhDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.cauhinhService.remove(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Xóa Thành Công',
    };
  }
}
