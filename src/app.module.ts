import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ReportModule } from "./report/report.module";
import { SummuryModule } from "./summury/summury.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [ReportModule, SummuryModule, PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
