import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { data, Report, ReportType } from './Data';
import { v4 as uuidGenerator } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReport(@Param('type') type: ReportType): Report[] {
    return data.report.filter(
      (report) => report.reportType === ReportType[type.toUpperCase()],
    );
  }

  @Get(':id')
  getReportById(
    @Param('type') type: ReportType,
    @Param('id') id: string,
  ): Report {
    return data.report
      .filter((report) => report.reportType === ReportType[type.toUpperCase()])
      .find((report) => report.id === id);
  }

  @Post()
  createReport(
    @Param('type') type: ReportType,
    @Body() { source, amount }: { source: string; amount: number },
  ): Report {
    const createdReport: Report = {
      id: uuidGenerator(),
      source: source,
      amount: amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType[type.toUpperCase()],
    };

    data.report.push(createdReport);

    return createdReport;
  }

  @Post(':id')
  createReportById() {
    return 'null';
  }

  @Put()
  updateReport() {
    return 'null';
  }

  @Put(':id')
  updateReportById() {
    return 'null';
  }

  @Delete(':id')
  deleteReportById(): void {
    const constt = null;
  }

  @Delete()
  deleteReport(): void {
    const constt = null;
  }
}
