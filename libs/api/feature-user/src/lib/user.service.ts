import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async findOne(username: string) {
    this.prismaService.user.findFirst({ where: { username } });
  }
}
