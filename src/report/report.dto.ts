import { IsNotEmpty, IsString, IsPositive, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { Expose, Exclude } from "class-transformer";
import { Report, ReportType } from "@prisma/client";

export interface Data {
  report: Report[];
}

export class CreateReportDto {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}

export class UpdateReportDto extends PartialType(CreateReportDto) {}

export class ResponseReportDto {
  constructor(partialReport: Partial<Report>) {
    Object.assign(this, partialReport);
  }

  id: string;
  source: string;
  amount: number;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Expose({ name: "updatedAtTransformed" })
  transformCreatedAt() {
    return this.updatedAt;
  }

  reportType: ReportType;
}
