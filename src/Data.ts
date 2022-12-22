import { ResponseReportDto } from './dtos/report.dtos';

export interface Data {
  report: Report[];
}

export interface Report {
  id: string;
  source: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  reportType: ReportType;
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: 'd9fe17e0-1f3b-4951-b37d-63fd1807372C',
      source: 'work',
      amount: 2000,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.INCOME,
    },
    {
      id: 'd9fe17e0-1f3b-4951-b37d-63fd1807372D',
      source: 'YouTube',
      amount: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.INCOME,
    },
    {
      id: 'd4fe17e0-1f3b-4951-b37d-63fd1807372C',
      source: 'food',
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.EXPENSE,
    },
    {
      id: 'd9fe17e0-2f3b-4951-b37d-63fd1807372C',
      source: 'sport',
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.EXPENSE,
    },
  ],
};
