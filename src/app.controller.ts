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
import { Data, data, Report, ReportType } from './Data';
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

  @Put(':id')
  updateReportById(
    @Param('id') id: string,
    @Body() body: { source: string; amount: number },
  ): void {
    data.report.forEach((report) => {
      if (report.id === id) {
        report.amount = body.amount;
        report.source = body.source;
      }
    });
  }

  @HttpCode(202)
  @Delete(':id')
  deleteReportById(@Param('id') id: string): void {
    data.report = data.report.filter((report) => report.id != id);
  }
}
