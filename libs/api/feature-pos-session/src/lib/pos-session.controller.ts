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
} from '@nestjs/common';
import { PosSessionService } from './session.service';
import { User, UserType } from '@hotel/common/types';
import { JwtAuthGuard } from '@hotel/api/feature-auth';

@Controller('session')
export class PosSessionController {
  constructor(private sessionService: PosSessionService) {}

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
    return 'updating the session with session id';
  }
}
