import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/Data';
import { ReportService } from 'src/report/report.service';
import { SummuryDto } from './summury.dtos';

@Injectable()
export class SummuryService {
  constructor(private readonly reportService: ReportService) {}

  getSummury(): SummuryDto {
    const totalExpense = this.reportService
      .getAllReport(ReportType.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = this.reportService
      .getAllReport(ReportType.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);

    return {
      totalExpense,
      totalIncome,
      netincome: totalIncome - totalExpense,
    };
  }
}
