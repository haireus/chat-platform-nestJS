import { User } from './../utils/typeorm/entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SERVICES } from './../utils/types';
import { Module } from '@nestjs/common';
import { UserService } from './user.services';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
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
