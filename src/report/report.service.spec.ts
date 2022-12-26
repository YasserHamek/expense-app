import { Test, TestingModule } from "@nestjs/testing";
import { ReportType } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { ReportService } from "./report.service";

describe("ReportService", () => {
  let service: ReportService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportService, PrismaService],
    }).compile();

    service = module.get<ReportService>(ReportService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAllReport unit testing", () => {
    it("should return expected income value", async () => {
      prismaService.report.findMany = jest.fn().mockReturnValue(prismaFindMany_incomeFilter_returnedValue);

      expect(await service.getAllReport(ReportType.income)).toEqual(service_getAllReport_incomeFilter_returnedValue);
    });

    it("should return expected expense value", async () => {
      prismaService.report.findMany = jest.fn().mockReturnValue(prismaFindMany_expenseFilter_returnedValue);

      expect(await service.getAllReport(ReportType.expense)).toEqual(service_getAllReport_expenseFilter_returnedValue);
    });
  });
});

//Testing Data
const prismaFindMany_expenseFilter_returnedValue = [
  {
    id: "9b2b4aba-ca74-4427-8ea2-cb4466723009",
    source: "Food",
    amount: 400,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:54:43.100Z",
    reportType: "expense",
  },
  {
    id: "d06afdc4-1d28-4068-9427-b86039fff6ad",
    source: "Travel",
    amount: 500,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:55:04.593Z",
    reportType: "expense",
  },
  {
    id: "e3dd33dd-5522-4fd8-89ed-480acbcb7680",
    source: "Sport",
    amount: 200,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:55:17.037Z",
    reportType: "expense",
  },
];

const prismaFindMany_incomeFilter_returnedValue = [
  {
    id: "5272eeb5-3ab2-406a-aacc-ee25ef6c08ee",
    source: "Youtube",
    amount: 1000,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:53:50.903Z",
    reportType: "income",
  },
  {
    id: "2ea2f3fd-2f4d-401b-9810-1fde818d6944",
    source: "Salary",
    amount: 2000,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:54:03.419Z",
    reportType: "income",
  },
];

const service_getAllReport_expenseFilter_returnedValue = [
  {
    id: "9b2b4aba-ca74-4427-8ea2-cb4466723009",
    source: "Food",
    amount: 400,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:54:43.100Z",
    reportType: "expense",
  },
  {
    id: "d06afdc4-1d28-4068-9427-b86039fff6ad",
    source: "Travel",
    amount: 500,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:55:04.593Z",
    reportType: "expense",
  },
  {
    id: "e3dd33dd-5522-4fd8-89ed-480acbcb7680",
    source: "Sport",
    amount: 200,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:55:17.037Z",
    reportType: "expense",
  },
];

const service_getAllReport_incomeFilter_returnedValue = [
  {
    id: "5272eeb5-3ab2-406a-aacc-ee25ef6c08ee",
    source: "Youtube",
    amount: 1000,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:53:50.903Z",
    reportType: "income",
  },
  {
    id: "2ea2f3fd-2f4d-401b-9810-1fde818d6944",
    source: "Salary",
    amount: 2000,
    createdAt: "2022-12-26T18:55:29.731Z",
    updatedAt: "2022-12-26T18:54:03.419Z",
    reportType: "income",
  },
];

const prismaServiceFindMany_incomeFilter = {
  where: {
    reportType: ReportType.income,
  },
};

const prismaServiceFindMany_expenseFilter = {
  where: {
    reportType: ReportType.income,
  },
};
