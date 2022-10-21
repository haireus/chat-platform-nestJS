import { IUserService } from './../user/user';
import { SERVICES, ValidateUserDetails } from 'src/utils/types';
import { IAuthService } from './auth';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  async validateUser(userCredentials: ValidateUserDetails) {
    const user = await this.userService.findUser({
      email: userCredentials.email,
    });

    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

    return await compareHash(userCredentials.password, user.password);
  }
}
