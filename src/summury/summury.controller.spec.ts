import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma/prisma.service";
import { ReportService } from "src/report/report.service";
import { SummuryController } from "./summury.controller";
import { SummuryService } from "./summury.service";

describe("SummuryController", () => {
  let controller: SummuryController;
  let summuryService: SummuryService;
  let prismaService: PrismaService;
  let reportService: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummuryController],
      providers: [SummuryService, ReportService, PrismaService],
    }).compile();

    controller = module.get<SummuryController>(SummuryController);
    summuryService = module.get<SummuryService>(SummuryService);
    prismaService = module.get<PrismaService>(PrismaService);
    reportService = module.get<ReportService>(ReportService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
