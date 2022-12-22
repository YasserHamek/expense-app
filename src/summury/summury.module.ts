import { Module } from '@nestjs/common';
import { ReportModule } from 'src/report/report.module';
import { SummuryController } from './summury.controller';
import { SummuryService } from './summury.service';

@Module({
  imports: [ReportModule],
  controllers: [SummuryController],
  providers: [SummuryService],
})
export class SummuryModule {}
