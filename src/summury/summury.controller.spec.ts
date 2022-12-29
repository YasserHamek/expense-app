import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma/prisma.service";
import { ReportService } from "src/report/report.service";
import { SummuryController } from "./summury.controller";
import { SummuryService } from "./summury.service";

describe("SummuryController", () => {
  let controller: SummuryController;
  let summuryService: SummuryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummuryController],
      providers: [SummuryService, ReportService, PrismaService],
    }).compile();

    controller = module.get<SummuryController>(SummuryController);
    summuryService = module.get<SummuryService>(SummuryService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("getAllSummry test", () => {
    it("it should return summury of all income and expense : ", async () => {
      summuryService.getSummury = jest.fn().mockReturnValue({
        totalExpense: 800,
        totalIncome: 3000,
        netincome: 2200,
      });

      expect(await controller.getSummury()).toEqual({
        totalExpense: 800,
        totalIncome: 3000,
        netincome: 2200,
      });
    });
  });
});
