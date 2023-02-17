import { Controller, Get } from "@nestjs/common";
import { SummuryDto } from "./summury.dtos";
import { SummuryService } from "./summury.service";
import { ApiFoundResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("summury")
@Controller("summury")
export class SummuryController {
  constructor(private readonly summuryService: SummuryService) {}

  @Get()
  @ApiFoundResponse()
  getSummury(): Promise<SummuryDto> {
    return this.summuryService.getSummury();
  }
}
