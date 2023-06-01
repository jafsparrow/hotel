import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log('module init jafar');
    await this['$connect']();
  }

  async enableShutdownHooks(app: INestApplication) {
    this['$on']('beforeExit', async () => {
      await app.close();
    });
  }
}
