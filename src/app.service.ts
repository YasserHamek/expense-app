import { Injectable } from '@nestjs/common';
import { data, Report, ReportType } from './Data';
import { v4 as uuidGenerator } from 'uuid';
import {
  CreateReportDto,
  ResponseReportDto,
  UpdateReportDto,
} from './dtos/report.dtos';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  getAllReport(type: ReportType): ResponseReportDto[] {
    return data.report
      .filter((report) => report.reportType === ReportType[type.toUpperCase()])
      .map((report) => new ResponseReportDto(report));
  }

  getReportById(type: ReportType, id: string): ResponseReportDto {
    return new ResponseReportDto(
      data.report
        .filter(
          (report) => report.reportType === ReportType[type.toUpperCase()],
        )
        .find((report) => report.id === id),
    );
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
