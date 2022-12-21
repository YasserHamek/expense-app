import { Controller, Get, Param } from '@nestjs/common';
import { data, Report, ReportType } from './Data';

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
}
