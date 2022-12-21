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
      id: '1',
      source: 'work',
      amount: 2000,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.INCOME,
    },
    {
      id: '2',
      source: 'YouTube',
      amount: 500,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.INCOME,
    },
    {
      id: '3',
      source: 'food',
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.EXPENSE,
    },
    {
      id: '4',
      source: 'sport',
      amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
      reportType: ReportType.EXPENSE,
    },
  ],
};
