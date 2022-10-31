import { User } from './../utils/typeorm';
import { CreateUserDetails, FindUserParams } from './../utils/types';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/helpers';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserDetails) {
    const existedUser = await this.userRepository.findOne({
      email: userDetails.email,
    });

    if (existedUser)
      throw new HttpException('User already exited', HttpStatus.CONFLICT);

    const hashedPassword = await hashPassword(userDetails.password);
    const newUser = await this.userRepository.save({
      ...userDetails,
      password: hashedPassword,
    });
    return newUser;
  }

  async findUser(findUserParams: FindUserParams): Promise<User> {
    return this.userRepository.findOne(findUserParams);
  }
}
