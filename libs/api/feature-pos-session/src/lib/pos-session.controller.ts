import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
  Response,
  StreamableFile,
} from '@nestjs/common';
import { PosSessionService } from './session.service';
import { User, UserType } from '@hotel/common/types';
import { JwtAuthGuard } from '@hotel/api/feature-auth';
import { SessionReportService } from './report.service';

@Controller('session')
export class PosSessionController {
  constructor(
    private sessionService: PosSessionService,
    private sessionReportService: SessionReportService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getSessionsOfTheDay(@Req() req: any) {
    console.log('recent orders');
    const user = req.user;
    return this.sessionService.getSessions();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  startAnewSession(@Req() req: any, @Body() data: any) {
    console.log('recent orders');
    const user = req.user;
    const intialAmount = data.cash ? data.cash : 0;
    return this.sessionService.createSession(user, intialAmount);
    return 'starting new session';
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  endActiveSession(@Param() params: any, @Req() req: any) {
    console.log('recent orders');
    const user = req.user;
    const sessionId = +params.id;
    return this.sessionService.closeSession(sessionId);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('session/:id')
  async downloadSessionReport(
    @Req() req: any,
    @Param('id') Id: string,
    @Response({ passthrough: true }) res: any
  ) {
    const sessionId = +Id;
    // const user = req.user;se

    const { pdfStream, reportName } =
      await this.sessionReportService.downloadSessionReport(sessionId);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${reportName}.pdf`,
    });
    return new StreamableFile(pdfStream);
  }
}
