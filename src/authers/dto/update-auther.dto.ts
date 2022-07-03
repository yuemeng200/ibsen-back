import { PartialType } from '@nestjs/swagger';
import { CreateAutherDto } from './create-auther.dto';

export class UpdateAutherDto extends PartialType(CreateAutherDto) {}
