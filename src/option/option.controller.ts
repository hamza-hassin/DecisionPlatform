import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OptionService } from './option.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Controller('option')
export class OptionController {
  constructor(private optionService: OptionService) {}

  @Post()
  async creat(@Body() dto: CreateOptionDto) {
    return this.optionService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.optionService.findById(+id);
  }
  @Get()
  async findAll() {
    return this.optionService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateOptionDto) {
    return this.optionService.update(+id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.optionService.delete(+id);
  }
}
