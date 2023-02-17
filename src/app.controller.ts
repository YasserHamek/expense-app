import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("hello nest")
@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return "Hello Nest!";
  }
}
