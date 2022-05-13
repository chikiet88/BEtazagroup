import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrouptaskService } from './grouptask.service';
import { CreateGrouptaskDto } from './dto/create-grouptask.dto';
import { UpdateGrouptaskDto } from './dto/update-grouptask.dto';

@Controller('grouptask')
export class GrouptaskController {
  constructor(private readonly grouptaskService: GrouptaskService) {}

  @Post()
  create(@Body() createGrouptaskDto: CreateGrouptaskDto) {
    return this.grouptaskService.create(createGrouptaskDto);
  }

  @Get()
  findAll() {
    return this.grouptaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grouptaskService.findOne(id);
  }
  @Get('/user/:id')
  findbyUser(@Param('id') id: string) {
    return this.grouptaskService.findbyUser(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrouptaskDto: UpdateGrouptaskDto) {
    return this.grouptaskService.update(id, updateGrouptaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grouptaskService.remove(id);
  }
}
