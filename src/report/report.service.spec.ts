import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma/prisma.service";
import { ReportService } from "./report.service";

describe("ReportService", () => {
  let service: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportService, PrismaService],
    }).compile();

    service = module.get<ReportService>(ReportService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
