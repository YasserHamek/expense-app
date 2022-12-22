import { Injectable } from '@nestjs/common';
import { data, Report, ReportType } from './Data';
import { v4 as uuidGenerator } from 'uuid';
import { CreateReportDtos, UpdateReportDtos } from './dtos/report.dtos';

@Injectable()
export class AppService {
  getAllReport(type: ReportType): Report[] {
    return data.report.filter(
      (report) => report.reportType === ReportType[type.toUpperCase()],
    );
  }

  getReportById(type: ReportType, id: string): Report {
    return data.report
      .filter((report) => report.reportType === ReportType[type.toUpperCase()])
      .find((report) => report.id === id);
  }

  createReport(type: ReportType, { source, amount }: CreateReportDtos): Report {
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

  updateReportById(id: string, body: UpdateReportDtos): void {
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
