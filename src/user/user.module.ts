import { SERVICES } from './../utils/types';
import { Module } from '@nestjs/common';
import { UserService } from './user.services';

@Module({
  controllers: [],
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
