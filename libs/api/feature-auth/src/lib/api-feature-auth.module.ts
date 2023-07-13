import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ApiDataAccessDbModule } from '@hotel/api/data-access-db';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { jwtConstants } from './constants';

import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from './user.service';

@Module({
  imports: [
    ApiDataAccessDbModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '432000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    LocalAuthGuard,
    JwtStrategy,
    UserService,
  ],
  exports: [LocalStrategy, LocalAuthGuard, JwtStrategy],
})
export class ApiFeatureAuthModule {}
