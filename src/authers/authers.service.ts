import { Injectable } from '@nestjs/common';
import { CreateAutherDto } from './dto/create-auther.dto';
import { UpdateAutherDto } from './dto/update-auther.dto';

@Injectable()
export class AuthersService {
  create(createAutherDto: CreateAutherDto) {
    return 'This action adds a new auther';
  }

  findAll() {
    return `This action returns all authers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auther`;
  }

  update(id: number, updateAutherDto: UpdateAutherDto) {
    return `This action updates a #${id} auther`;
  }

  remove(id: number) {
    return `This action removes a #${id} auther`;
  }
}
