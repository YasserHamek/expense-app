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
import { Report, ReportType } from './Data';

import { AppService } from './app.service';
import { ParseEnumPipe, ParseUUIDPipe } from '@nestjs/common/pipes';
import { CreateReportDtos, UpdateReportDtos } from './dtos/report.dtos';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): Report[] {
    return this.appService.getAllReport(type);
  }

  @Get(':id')
  getReportById(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
  ): Report {
    return this.appService.getReportById(type, id);
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() { source, amount }: CreateReportDtos,
  ): Report {
    return this.appService.createReport(type, { source, amount });
  }

  @HttpCode(204)
  @Put(':id')
  updateReportById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() { source, amount }: UpdateReportDtos,
  ): void {
    this.appService.updateReportById(id, { source, amount });
  }

  @HttpCode(202)
  @Delete(':id')
  deleteReportById(@Param('id', ParseUUIDPipe) id: string): void {
    this.appService.deleteReportById(id);
  }
}
