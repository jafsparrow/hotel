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
    @Query('startDate') startDateIso: any,
    @Query('endDate') endDateIso: any
  ) {
    console.log('start date', startDateIso);
    console.log('end date', endDateIso);
    const startDate = new Date(startDateIso.toString());
    const endDate = new Date(endDateIso.toString());
    return this.statService.getReportStatsForThePeriod(startDate, endDate);
  }

  @Get('product')
  getProductStatsForDuration(
    @Query('startDate') startDateIso: any,
    @Query('endDate') endDateIso: any
  ) {
    console.log('start date', startDateIso);
    console.log('end date', endDateIso);
    const startDate = new Date(startDateIso.toString());
    const endDate = new Date(endDateIso.toString());
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
