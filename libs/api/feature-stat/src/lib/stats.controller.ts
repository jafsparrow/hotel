import {
  Controller,
  Get,
  Query,
  StreamableFile,
  Response,
} from '@nestjs/common';
import { StatsService } from './stats.service';
import { DurationDto } from './dto/duration.dto';

// import {
//   createHtmlDoc,
//   getPdfOptionsForReciept,
//   getPdfStream,
// } from '@hotel/common/util';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('stats')
export class StatController {
  constructor(private statService: StatsService) {}

  // @Get('')
  // async getStatFile(
  //   @Response({ passthrough: true }) res: any
  // ): Promise<StreamableFile> {
  //   const html = createHtmlDoc('sessionEndsummary.report.html', null, '');
  //   const pdfOptions = getPdfOptionsForReciept('views', 'report');
  //   const file = getPdfStream(html, pdfOptions);
  //   // const file = createReadStream(join(process.cwd(), 'Resume 2023pdf.pdf'));
  //   res.set({
  //     'Content-Type': 'application/pdf',
  //     'Content-Disposition': 'attachment; filename="Resume 2023pdf.pdf',
  //   });
  //   return new StreamableFile(file);
  // }

  @Get('chck')
  getFile(@Response({ passthrough: true }) res: any): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'Resume 2023pdf.pdf'));
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Resume 2023pdf.pdf',
    });
    return new StreamableFile(file);
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
