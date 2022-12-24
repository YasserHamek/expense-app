import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { data } from 'src/Data';
import {
  ResponseReportDto,
  CreateReportDto,
  UpdateReportDto,
} from 'src/report/report.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Report, ReportType } from '@prisma/client';

@Injectable()
export class ReportService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllReport(type: ReportType): Promise<ResponseReportDto[]> {
    const reports: Report[] = await this.prismaService.report.findMany({
      where: {
        reportType: type,
      },
    });
    return reports.map((report) => new ResponseReportDto(report));
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

  async createReport(
    type: ReportType,
    createReportDto: CreateReportDto,
  ): Promise<ResponseReportDto> {
    const createdReport: Report = await this.prismaService.report.create({
      data: {
        source: createReportDto.source,
        amount: createReportDto.amount,
        reportType: type,
      },
    });

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
