import { PrismaService } from '@hotel/api/data-access-db';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../../feature-user/src/lib/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async findOne(username: string) {
    const user = await this.prismaService.user.findFirst({
      where: { username },
    });
    // console.log('inside the findOne method. ', user);
    return user;
  }

  async createAStaffUser(userDto: CreateUserDto) {
    try {
      return await this.prismaService.user.create({
        data: {
          username: userDto.username,
          password: userDto.password,
          name: userDto.name,
          phone: userDto.phone,
        },
      });
    } catch (error) {
      throw new BadRequestException({ message: 'Could not create a new user' });
    }
  }
}
