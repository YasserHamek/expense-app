import { Controller } from "@nestjs/common/decorators";
import { Test, TestingModule } from "@nestjs/testing";
import { ReportType } from "@prisma/client";
import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";

describe("ReportController", () => {
  let reportController: ReportController;
  let reportService: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportController, ReportService],
    }).compile();

    reportController = module.get<ReportController>(ReportController);
    reportService = module.get<ReportService>(ReportService);
  });

  it("should be defined", () => {
    expect(reportController).toBeDefined();
  });

  describe("getAllReport unit testing", () => {
    it("should return expected expense value : ", async () => {
      reportService.getAllReport = jest.fn().mockReturnValue(reportService_getAllReport_expenseReturnedValue);

      expect(await reportController.getAllReport(ReportType.expense)).toEqual(reportService_getAllReport_expenseReturnedValue);
    });

    it("should return expected expense value : ", async () => {
      reportService.getAllReport = jest.fn().mockReturnValue(reportService_getAllReport_incomeReturnedValue);

      expect(await reportController.getAllReport(ReportType.income)).toEqual(reportService_getAllReport_incomeReturnedValue);
    });

    it("reportService.getAllReport should be called by right params, case expense filter : ", async () => {
      const mockReportServiceGetAllReport = jest
        .spyOn(reportService, "getAllReport")
        .mockImplementation(jest.fn().mockReturnValue([]));

      await reportController.getAllReport(ReportType.expense);

      expect(mockReportServiceGetAllReport).toBeCalledWith(ReportType.expense);
    });

    it("reportService.getAllReport should be called by right params, case expense filter : ", async () => {
      const mockReportServiceGetAllReport = jest
        .spyOn(reportService, "getAllReport")
        .mockImplementation(jest.fn().mockReturnValue([]));

      await reportController.getAllReport(ReportType.income);

      expect(mockReportServiceGetAllReport).toBeCalledWith(ReportType.income);
    });
  });
});

//getAllReport testing data
const reportService_getAllReport_expenseReturnedValue = [
  {
    id: "9b2b4aba-ca74-4427-8ea2-cb4466723009",
    source: "Food",
    amount: 400,
    reportType: "expense",
    updatedAtTransformed: "2022-12-26T18:55:29.731Z",
  },
  {
    id: "e3dd33dd-5522-4fd8-89ed-480acbcb7680",
    source: "Sport",
    amount: 200,
    reportType: "expense",
    updatedAtTransformed: "2022-12-26T18:55:29.731Z",
  },
  {
    id: "c1b7324a-b712-4a97-a15e-2db4e5ca6f36",
    source: "fruit",
    amount: 100,
    reportType: "expense",
    updatedAtTransformed: "2022-12-28T17:38:07.468Z",
  },
];

const reportService_getAllReport_incomeReturnedValue = [
  {
    id: "5272eeb5-3ab2-406a-aacc-ee25ef6c08ee",
    source: "Youtube",
    amount: 1000,
    reportType: "income",
    updatedAtTransformed: "2022-12-26T18:55:29.731Z",
  },
  {
    id: "2ea2f3fd-2f4d-401b-9810-1fde818d6944",
    source: "Salary",
    amount: 2000,
    reportType: "income",
    updatedAtTransformed: "2022-12-26T18:55:29.731Z",
  },
];
