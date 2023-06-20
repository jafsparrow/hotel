import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return 'hello';
  }

  @Post('create')
  createUser(@Body() createUserdto: CreateUserDto, @Req() req: any) {
    return this.userService.createAStaffUser(createUserdto);
  }
}
