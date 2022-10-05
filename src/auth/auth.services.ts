import { IUserService } from './../user/user';
import { SERVICES } from 'src/utils/types';
import { IAuthService } from './auth';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AuthService implements IAuthService {
  constructor(@Inject(SERVICES.USER) private userService: IUserService) {}

  createUser() {}
}
