import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { data, Report, ReportType } from './Data';

import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReport(@Param('type') type: ReportType): Report[] {
    return this.appService.getAllReport(type);
  }

  @Get(':id')
  getReportById(
    @Param('type') type: ReportType,
    @Param('id') id: string,
  ): Report {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('type') type: ReportType,
    @Body() { source, amount }: { source: string; amount: number },
  ): Report {
    return this.appService.createReport(type, { source, amount });
  }

  @Put(':id')
  updateReportById(
    @Param('id') id: string,
    @Body() { source, amount }: { source: string; amount: number },
  ): void {
    this.appService.updateReportById(id, { source, amount });
  }

  @HttpCode(202)
  @Delete(':id')
  deleteReportById(@Param('id') id: string): void {
    this.appService.deleteReportById(id);
  }
}
