import { Module } from '@nestjs/common';
import { AuthersService } from './authers.service';
import { AuthersController } from './authers.controller';

@Module({
  controllers: [AuthersController],
  providers: [AuthersService],
})
export class AuthersModule {}
