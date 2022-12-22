import { Test, TestingModule } from '@nestjs/testing';
import { SummuryController } from './summury.controller';

describe('SummuryController', () => {
  let controller: SummuryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummuryController],
    }).compile();

    controller = module.get<SummuryController>(SummuryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
