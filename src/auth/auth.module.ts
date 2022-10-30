import { UserModule } from './../user/user.module';
import { SERVICES } from './../utils/types';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.services';
import { LocalStrategy } from './utils/localStrategy';
import { SessionSerializer } from './utils/serializer';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    SessionSerializer,
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
