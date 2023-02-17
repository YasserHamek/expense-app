import { IsNotEmpty, IsString, IsPositive, IsNumber } from "class-validator";
import { Expose, Exclude } from "class-transformer";
import { Report, ReportType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export interface Data {
  report: Report[];
}

export class CreateReportDto {
  @ApiProperty({
    type: String,
    description: "The income or expense source",
  })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({
    description: "The income or expense amount",
  })
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class UpdateReportDto extends CreateReportDto {}

export class ResponseReportDto {
  constructor(partialReport: Partial<Report>) {
    Object.assign(this, partialReport);
  }

  @ApiProperty()
  id: string;

  @ApiProperty({
    description: "The income or expense source",
  })
  source: string;

  @ApiProperty({
    description: "The income or expense amount",
  })
  amount: number;

  @ApiProperty({
    description: "The income or expense creation date",
  })
  @Exclude()
  createdAt: Date;

  @ApiProperty({
    description: "The income or expense updating date",
  })
  @Exclude()
  updatedAt: Date;

  @Expose({ name: "updatedAtTransformed" })
  transformCreatedAt() {
    return this.updatedAt;
  }

  @ApiProperty({
    description: "Report type, either expense or income",
  })
  reportType: ReportType;
}
