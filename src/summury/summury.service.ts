import { Injectable } from "@nestjs/common";
import { ReportType } from "@prisma/client";
import { ResponseReportDto } from "src/report/report.dto";
import { ReportService } from "src/report/report.service";
import { SummuryDto } from "./summury.dtos";

@Injectable()
export class SummuryService {
  constructor(private readonly reportService: ReportService) {}

  async getSummury(): Promise<SummuryDto> {
    const allIncomeReport: ResponseReportDto[] = await this.reportService.getAllReport(ReportType.income);
    const allExpenseReport: ResponseReportDto[] = await this.reportService.getAllReport(ReportType.expense);

    const totalExpense = allExpenseReport.reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = allIncomeReport.reduce((sum, report) => sum + report.amount, 0);

    return new SummuryDto({
      totalExpense,
      totalIncome,
      netincome: totalIncome - totalExpense,
    });
  }
}
