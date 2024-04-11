import { Test, TestingModule } from '@nestjs/testing';
import { LandscapeService } from './landscape.service';

describe('LandscapeService', () => {
  let service: LandscapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandscapeService],
    }).compile();

    service = module.get<LandscapeService>(LandscapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
