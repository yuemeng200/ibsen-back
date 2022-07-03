import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthersService } from './authers.service';
import { CreateAutherDto } from './dto/create-auther.dto';
import { UpdateAutherDto } from './dto/update-auther.dto';

@Controller('authers')
export class AuthersController {
  constructor(private readonly authersService: AuthersService) {}

  @Post()
  create(@Body() createAutherDto: CreateAutherDto) {
    return this.authersService.create(createAutherDto);
  }

  @Get()
  findAll() {
    return this.authersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutherDto: UpdateAutherDto) {
    return this.authersService.update(+id, updateAutherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authersService.remove(+id);
  }
}
