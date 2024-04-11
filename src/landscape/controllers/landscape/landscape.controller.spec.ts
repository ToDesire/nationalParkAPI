import { Test, TestingModule } from '@nestjs/testing';
import { LandscapeController } from './landscape.controller';

describe('LandscapeController', () => {
  let controller: LandscapeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandscapeController],
    }).compile();

    controller = module.get<LandscapeController>(LandscapeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
