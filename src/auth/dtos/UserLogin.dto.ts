import { IsEmail, IsNotEmpty } from 'class-validator';
export class UserLoginDto {
  @IsNotEmpty()
  @IsEmail()
  emailL: string;

  @IsNotEmpty()
  password: string;
}
