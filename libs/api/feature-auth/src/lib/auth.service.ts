import { PrismaService } from '@hotel/api/data-access-db';
import { UserService } from '@hotel/api/feature-user';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@hotel/common/types';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}
  async signIn(user: User): Promise<any> {
    const payload = {
      username: user.username,
      name: user.firstName + ' ' + user.lastName,
    };
    return {
      user,
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, pass: number): Promise<any> {
    const user = await this.userService.findOne(username);
    console.log('before check', user);
    if (user && user.password == pass) {
      console.log('inside quality chekd');
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
