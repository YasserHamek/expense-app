import { IsNotEmpty, IsString, IsPositive, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateReportDtos {
  @IsString()
  @IsNotEmpty()
  source: string;

  @IsNumber()
  @IsPositive()
  amount: number;
}

export class UpdateReportDtos extends PartialType(CreateReportDtos) {}
