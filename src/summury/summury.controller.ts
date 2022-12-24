import { Controller, Get } from '@nestjs/common';
import { SummuryDto } from './summury.dtos';
import { SummuryService } from './summury.service';

@Controller('summury')
export class SummuryController {
  constructor(private readonly summuryService: SummuryService) {}

  @Get()
  getSummury(): Promise<SummuryDto> {
    return this.summuryService.getSummury();
  }
}
