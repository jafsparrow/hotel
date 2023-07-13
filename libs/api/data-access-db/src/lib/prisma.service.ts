import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log('module init jafar');
    await this.$connect();
    // await this['$connect']();
  }

  async enableShutdownHooks(app: INestApplication) {
    // this.$on('beforeExit' as never, async () => {
    //   await app.close();
    // });
    this['$on']('beforeExit' as never, async () => {
      await app.close();
    });
  }
}
