import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ResponseReportDto, CreateReportDto, UpdateReportDto } from "src/report/report.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Report, ReportType } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable()
export class ReportService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllReport(type: ReportType): Promise<ResponseReportDto[]> {
    const reports: Report[] = await this.prismaService.report.findMany({
      where: {
        reportType: type,
      },
    });

    return reports.map(report => new ResponseReportDto(report));
  }

  async getReportById(id: string): Promise<ResponseReportDto> {
    const searchedReport: Report = await this.prismaService.report
      .findUniqueOrThrow({
        where: {
          id: id,
        },
      })
      .catch((notFoundError: PrismaClientKnownRequestError) => {
        if (notFoundError.code === "P2025") {
          throw new HttpException("Report with id : " + id + " not found", HttpStatus.NOT_FOUND);
        }
        throw new HttpException("internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
      });

    return new ResponseReportDto(searchedReport);
  }

  async createReport(type: ReportType, createReportDto: CreateReportDto): Promise<ResponseReportDto> {
    const createdReport: Report = await this.prismaService.report.create({
      data: {
        source: createReportDto.source,
        amount: createReportDto.amount,
        reportType: type,
      },
    });
    const report = new ResponseReportDto(createdReport);
    return report;
  }

  async updateReportById(id: string, updateReportDto: UpdateReportDto): Promise<ResponseReportDto> {
    const updatedReport: Report = await this.prismaService.report
      .update({
        where: {
          id: id,
        },
        data: updateReportDto,
      })
      .catch((notFoundError: PrismaClientKnownRequestError) => {
        if (notFoundError.code === "P2025") {
          throw new HttpException("Report with id : " + id + " not found", HttpStatus.NOT_FOUND);
        }
        throw new HttpException("internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
      });
    const returnedReport = new ResponseReportDto(updatedReport);
    return new ResponseReportDto(updatedReport);
  }

  async deleteReportById(id: string): Promise<ResponseReportDto> {
    const deletedReport: Report = await this.prismaService.report
      .delete({
        where: {
          id: id,
        },
      })
      .catch((notFoundError: PrismaClientKnownRequestError) => {
        if (notFoundError.code === "P2025") {
          throw new HttpException("Report with id : " + id + " not found", HttpStatus.NOT_FOUND);
        }
        throw new HttpException("internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
      });

    return new ResponseReportDto(deletedReport);
  }
}
