import { CreateUserDetails } from './../utils/types';
import { Injectable } from '@nestjs/common';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
  createUser(userDetails: CreateUserDetails) {
    console.log('Haireus test create user for the first page');
  }
}
