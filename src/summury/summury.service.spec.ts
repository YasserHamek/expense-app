import { Test, TestingModule } from "@nestjs/testing";
import { ReportType } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { ReportService } from "src/report/report.service";
import { SummuryService } from "./summury.service";

describe("SummuryService", () => {
  let summuryService: SummuryService;
  let reportService: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummuryService, ReportService, PrismaService],
    }).compile();

    summuryService = module.get<SummuryService>(SummuryService);
    reportService = module.get<ReportService>(ReportService);
  });

  it("should be defined", () => {
    expect(summuryService).toBeDefined();
  });

  describe("getAllSummry test", () => {
    it("it should return summury of all income and expense : ", async () => {
      reportService.getAllReport = jest.fn().mockImplementation((reportType: ReportType) => {
        if (reportType === ReportType.income) return allIncomes;

        if (reportType === ReportType.expense) return allExpenses;
      });

      expect(await summuryService.getSummury()).toEqual({
        totalExpense: 800,
        totalIncome: 3000,
        netincome: 2200,
      });
    });
  });
});

//testing data
const allIncomes = [
  {
    id: "5272eeb5-3ab2-406a-aacc-ee25ef6c08ee",
    source: "Youtube",
    amount: 1000,
    reportType: "income",
    updatedAtTransformed: "2022-12-26T18:53:50.903Z",
  },
  {
    id: "2ea2f3fd-2f4d-401b-9810-1fde818d6944",
    source: "Salary",
    amount: 2000,
    reportType: "income",
    updatedAtTransformed: "2022-12-26T18:54:03.419Z",
  },
];

const allExpenses = [
  {
    id: "9b2b4aba-ca74-4427-8ea2-cb4466723009",
    source: "Food",
    amount: 400,
    reportType: "expense",
    updatedAtTransformed: "2022-12-26T18:54:43.100Z",
  },
  {
    id: "e3dd33dd-5522-4fd8-89ed-480acbcb7680",
    source: "Sport",
    amount: 200,
    reportType: "expense",
    updatedAtTransformed: "2022-12-26T18:55:17.037Z",
  },
  {
    id: "0b36de6f-3a05-4564-8d1f-4a5d8f4ec738",
    source: "fruit",
    amount: 100,
    reportType: "expense",
    updatedAtTransformed: "2022-12-28T17:42:16.162Z",
  },
  {
    id: "c5ce1ceb-14e8-4b59-9ad1-54b5225c4c24",
    source: "vegetables",
    amount: 100,
    reportType: "expense",
    updatedAtTransformed: "2022-12-29T09:25:21.927Z",
  },
];
