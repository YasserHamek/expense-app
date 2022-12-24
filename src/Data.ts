import { Report, ReportType } from '@prisma/client';

export interface Data {
  report: Report[];
}

export const data: Data = {
  report: [
    {
      id: 'd9fe17e0-1f3b-4951-b37d-63fd1807372C',
      source: 'work',
      amount: 2000,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.income,
    },
    {
      id: 'd9fe17e0-1f3b-4951-b37d-63fd1807372D',
      source: 'YouTube',
      amount: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.income,
    },
    {
      id: 'd4fe17e0-1f3b-4951-b37d-63fd1807372C',
      source: 'food',
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.expense,
    },
    {
      id: 'd9fe17e0-2f3b-4951-b37d-63fd1807372C',
      source: 'sport',
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.expense,
    },
  ],
};
