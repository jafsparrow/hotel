import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('signup')
  async signUp(@Body() createUserInput: CreateUserDto) {
    console.log('sinup methiod');
    return this.userService.createAStaffUser(createUserInput);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Req() req: any) {
    console.log('has gone inside');
    const user = req.user;
    return this.authService.signIn(user);
  }
}
