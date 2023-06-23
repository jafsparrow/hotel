import { PrismaService } from '@hotel/api/data-access-db';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@hotel/common/types';

import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}
  async signIn(user: User): Promise<any> {
    console.log('inside singin', user);
    const payload = {
      username: user.username,
      name: user.name,
    };
    const response = {
      user,
      token: this.jwtService.sign(payload),
    };

    console.log('responsse', response);

    return response;
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

  async getUserFromUserName(username: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { username },
      });
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      console.log('could not find a user getUserFromUserName');
      throw new UnauthorizedException();
    }
  }
}
