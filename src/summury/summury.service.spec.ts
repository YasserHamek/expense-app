import { Test, TestingModule } from '@nestjs/testing';
import { SummuryService } from './summury.service';

describe('SummuryService', () => {
  let service: SummuryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummuryService],
    }).compile();

    service = module.get<SummuryService>(SummuryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
