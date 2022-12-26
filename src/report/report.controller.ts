import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ParseEnumPipe, ParseUUIDPipe } from "@nestjs/common/pipes";
import { ReportType } from "@prisma/client";
import { CreateReportDto, ResponseReportDto, UpdateReportDto } from "src/report/report.dto";
import { ReportService } from "./report.service";

@Controller("report/:type")
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  getAllReport(@Param("type", new ParseEnumPipe(ReportType)) type: ReportType): Promise<ResponseReportDto[]> {
    return this.reportService.getAllReport(type);
  }

  @Get(":id")
  getReportById(@Param("id", ParseUUIDPipe) id: string): Promise<ResponseReportDto> {
    return this.reportService.getReportById(id);
  }

  @Post()
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() { source, amount }: CreateReportDto,
  ): Promise<ResponseReportDto> {
    return this.reportService.createReport(type, { source, amount });
  }

  @Put(":id")
  updateReportById(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() { source, amount }: UpdateReportDto,
  ): Promise<ResponseReportDto> {
    return this.reportService.updateReportById(id, { source, amount });
  }

  @HttpCode(202)
  @Delete(":id")
  deleteReportById(@Param("id", ParseUUIDPipe) id: string): Promise<ResponseReportDto> {
    return this.reportService.deleteReportById(id);
  }
}
