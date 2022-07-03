import { Test, TestingModule } from '@nestjs/testing';
import { AuthersService } from './authers.service';

describe('AuthersService', () => {
  let service: AuthersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthersService],
    }).compile();

    service = module.get<AuthersService>(AuthersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
