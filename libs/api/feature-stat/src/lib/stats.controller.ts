import { Controller, Get, Query } from '@nestjs/common';
import { StatsService } from './stats.service';
import { DurationDto } from './dto/duration.dto';

@Controller('stats')
export class StatController {
  constructor(private statService: StatsService) {}

  @Get()
  getStatus() {
    const date = new Date();
    return this.statService.getReportStatsForThePeriod(date, date);
  }

  @Get('order')
  getOrderStatForDuration(
    @Query('startDate') startDate: any,
    @Query('endDate') endDate: any
  ) {
    console.log(startDate, endDate);
    return startDate;
  }

  @Get('product')
  getProductStatsForDuration(
    @Query('startDate') startDateIso: any,
    @Query('endDate') endDateIso: any
  ) {
    const startDate = new Date('2023-06-27');
    const endDate = new Date('2023-06-28');
    return this.statService.getProductStatsForThePeriod(startDate, endDate);
  }

  @Get('staff')
  getStaffStatsForDuration(
    @Query('startDate') startDate: any,
    @Query('endDate') endDate: any
  ) {
    return 'staff stat.';
  }
}
