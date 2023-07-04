import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatController {
  constructor(private statService: StatsService) {}

  @Get()
  getStatus() {
    const date = new Date();
    return this.statService.getReportStatsForThePeriod(date, date);
  }
}
