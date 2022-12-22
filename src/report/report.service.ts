import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReportType, data, Report } from 'src/Data';
import { v4 as uuidGenerator } from 'uuid';
import {
  ResponseReportDto,
  CreateReportDto,
  UpdateReportDto,
} from 'src/report/report.dtos';

@Injectable()
export class ReportService {
  getAllReport(type: ReportType): ResponseReportDto[] {
    return data.report
      .filter((report) => report.reportType === ReportType[type.toUpperCase()])
      .map((report) => new ResponseReportDto(report));
  }

  getReportById(type: ReportType, id: string): ResponseReportDto {
    const report: Report = data.report
      .filter((report) => report.reportType === ReportType[type.toUpperCase()])
      .find((report) => report.id === id);

    if (!report) {
      throw new HttpException('report not found', HttpStatus.NOT_FOUND);
    }

    return new ResponseReportDto(report);
  }

  createReport(
    type: ReportType,
    { source, amount }: CreateReportDto,
  ): ResponseReportDto {
    const createdReport: Report = {
      id: uuidGenerator(),
      source: source,
      amount: amount,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType[type.toUpperCase()],
    };

    data.report.push(createdReport);

    return new ResponseReportDto(createdReport);
  }

  updateReportById(id: string, body: UpdateReportDto): void {
    data.report.forEach((report) => {
      if (report.id === id) {
        report.amount = body.amount;
        report.source = body.source;
      }
    });
  }

  deleteReportById(id: string): void {
    data.report = data.report.filter((report) => report.id != id);
  }
}
