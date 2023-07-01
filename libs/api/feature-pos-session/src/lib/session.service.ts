import { PrismaService } from '@hotel/api/data-access-db';
import { PaymentStatus, SessionStatus, User } from '@hotel/common/types';
import { getStartOfTheDay } from '@hotel/common/util';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class PosSessionService {
  constructor(private prismaService: PrismaService) {}

  async createSession(appUser: User, initialCash: number) {
    try {
      // check if there  is any active session.
      const activesession = await this.prismaService.posSession.findFirst({
        where: {
          status: SessionStatus.ACTIVE,
        },
      });
      // if yes do not create one..
      if (activesession) return;
      // if no start a new one.

      await this.prismaService.posSession.create({
        data: {
          startTime: new Date(),
          status: SessionStatus.ACTIVE,
          createdUserId: appUser.id!,
          initialCash: initialCash,
        },
      });
      // return all the sessions of the day.
      return this.getSessions();
    } catch (error) {
      console.log('error occured during creation of session');
      return new Error();
    }
  }
  async getSessions() {
    // chek any other open, close it forcefully.
    const sessions = await this.prismaService.posSession.findMany({
      where: {
        OR: [
          {
            status: SessionStatus.ACTIVE,
          },
          {
            startTime: { gte: getStartOfTheDay() },
          },
        ],
      },
    });

    return sessions;
  }
  async closeSession(sessionId: number) {
    // make sure all the sessions are closed.
    // check for non settled orders before close it.
    const nonPaidOrders = await this.prismaService.order.findMany({
      where: { paymentStatus: PaymentStatus.NOTPAID },
    });

    console.log('nono paid users', nonPaidOrders.length);

    if (nonPaidOrders.length) {
      console.log('hs gone inside');
      throw new InternalServerErrorException({
        message: `There are ${nonPaidOrders.length} orders which are not settled yet.`,
      });
    }
    // generate report and get it downloaded at the client.

    const closedSession = await this.prismaService.posSession.update({
      where: { id: sessionId },
      data: { status: SessionStatus.CLOSE, endTime: new Date() },
    });

    console.log('cosed sessino ', closedSession);
    // get orders from closed session start time..

    const totalsOrders = await this.prismaService.order.findMany({
      where: { createdAt: { gte: closedSession.startTime } },
    });

    return totalsOrders;
  }
}
