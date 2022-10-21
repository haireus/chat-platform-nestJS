import { User } from 'src/utils/typeorm/entities/User';
import { CreateUserDetails, FindUserParams } from './../utils/types';
export interface IUserService {
  createUser(userDetails: CreateUserDetails): Promise<User>;
  findUser(findUserParams: FindUserParams): Promise<User>;
}
