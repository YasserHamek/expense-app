import { Controller, Get } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello Nest!';
  }
}
