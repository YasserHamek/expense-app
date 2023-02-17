import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { ParseEnumPipe, ParseUUIDPipe } from "@nestjs/common/pipes";
import { ReportType } from "@prisma/client";
import { CreateReportDto, ResponseReportDto, UpdateReportDto } from "src/report/report.dto";
import { ReportService } from "./report.service";
import { ApiResponse, ApiTags, ApiCreatedResponse, ApiFoundResponse, ApiOkResponse, ApiParam } from "@nestjs/swagger";

@ApiTags("report")
@Controller("report/:type")
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  @ApiParam({
    name: "type",
    description: "Report Type, either income or expense.",
  })
  @ApiFoundResponse({ type: ResponseReportDto, isArray: true, description: "The Reports has been found." })
  getAllReport(@Param("type", new ParseEnumPipe(ReportType)) type: ReportType): Promise<ResponseReportDto[]> {
    return this.reportService.getAllReport(type);
  }

  @Get(":id")
  @ApiParam({
    name: "id",
    description: "Report id.",
  })
  @ApiFoundResponse({ type: ResponseReportDto, description: "The Report has been found." })
  getReportById(@Param("id", ParseUUIDPipe) id: string): Promise<ResponseReportDto> {
    return this.reportService.getReportById(id);
  }

  @Post()
  @ApiParam({
    name: "type",
    description: "Report Type, either income or expense.",
  })
  @ApiCreatedResponse({ type: ResponseReportDto, description: "The Report has been successfully created." })
  createReport(
    @Param("type", new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() { source, amount }: CreateReportDto,
  ): Promise<ResponseReportDto> {
    return this.reportService.createReport(type, { source, amount });
  }

  @Put(":id")
  @ApiParam({
    name: "id",
    description: "Report id.",
  })
  @ApiOkResponse({ type: UpdateReportDto, description: "The Report has been successfully updated." })
  updateReportById(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() { source, amount }: UpdateReportDto,
  ): Promise<ResponseReportDto> {
    return this.reportService.updateReportById(id, { source, amount });
  }

  @Delete(":id")
  @HttpCode(202)
  @ApiParam({
    name: "id",
    description: "Report id.",
  })
  @ApiResponse({ status: 202, type: ResponseReportDto, description: "The Report has been successfully deleted." })
  deleteReportById(@Param("id", ParseUUIDPipe) id: string): Promise<ResponseReportDto> {
    return this.reportService.deleteReportById(id);
  }
}
