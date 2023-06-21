import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PosSessionService } from './session.service';

@Controller('session')
export class PosSessionController {
  constructor(private sessionService: PosSessionService) {}
}
