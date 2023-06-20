import { PrismaService } from '@hotel/api/data-access-db';
import { UserService } from '@hotel/api/feature-user';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prismaService: PrismaService
  ) {}
  async signIn(username: string, pass: number): Promise<any> {
    console.log(username, pass);
    const user = await this.prismaService.user.findFirst({
      where: { username },
    });

    if (!user) throw new UnauthorizedException();

    console.log(user.password, pass);
    if (user.password != pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async createUser() {
    return true;
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
