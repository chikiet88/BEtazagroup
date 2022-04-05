import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChangelogService } from './changelog.service';
import { CreateChangelogDto } from './dto/create-changelog.dto';
import { UpdateChangelogDto } from './dto/update-changelog.dto';

@Controller('changelog')
export class ChangelogController {
  constructor(private readonly changelogService: ChangelogService) {}

  @Post()
  create(@Body() createChangelogDto: CreateChangelogDto) {
    return this.changelogService.create(createChangelogDto);
  }

  @Get()
  findAll() {
    return this.changelogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.changelogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChangelogDto: UpdateChangelogDto) {
    return this.changelogService.update(id, updateChangelogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.changelogService.remove(id);
  }
}
