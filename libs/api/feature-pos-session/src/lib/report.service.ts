import { PuppeteerService } from '@hotel/api/common';
import { PrismaService } from '@hotel/api/data-access-db';
import { StatsService } from '@hotel/api/feature-stat';
import {
  dateTimeToDateHHMM,
  getOnlyCurrentDateWithoutTime,
} from '@hotel/common/util';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionReportService {
  constructor(
    private prismaService: PrismaService,
    private statService: StatsService,
    private pupeteerService: PuppeteerService
  ) {}
  async downloadSessionReport(sessionId: number) {
    // get the start and end date of the session Id.
    const { startTime, endTime, initialCash } = (await this.getSessionDetails(
      sessionId
    )) as unknown as any;
    console.log('session details', { startTime, endTime, initialCash });

    const reportSummary = await this.statService.getReportStatsForThePeriod(
      startTime,
      endTime
    );
    console.log('resport Sumamry : ', reportSummary);

    const prductSummary = await this.statService.getProductStatsForThePeriod(
      startTime,
      endTime
    );

    const formattedStartTime = dateTimeToDateHHMM(startTime);
    const formattedEndTime = dateTimeToDateHHMM(endTime);
    const currentDayOnlyDate = getOnlyCurrentDateWithoutTime();
    // console.log('product summary', prductSummary);
    const htmlInputData: any = {
      date: currentDayOnlyDate,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      initialCash,
      productStatArr: prductSummary,
      reportStatArr: reportSummary,
    };
    const pdfStream = await this.pupeteerService.getReportPdfStream(
      'sessionSummary',
      'views',
      'pdf',
      'sessionEndsummary.report.html',
      htmlInputData
    );
    return {
      pdfStream,
      reportName: `session report - ${startTime} -- ${endTime}`,
    };
  }

  async getSessionDetails(sessionId: number) {
    return await this.prismaService.posSession.findUnique({
      where: { id: sessionId },
    });
  }
}
