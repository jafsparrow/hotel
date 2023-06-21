import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PosSessionService {
  constructor(private prismaService: PrismaService) {}

  createSession() {
    return 'hello';
  }
  getOpenSession() {
    // chek any other open, close it forcefully.
    return 'hello';
  }
  closeSession() {
    // make sure all the sessions are closed.
    // check for non settled orders before close it.
  }
}
