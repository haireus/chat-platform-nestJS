import { CreateUserDto } from './dtos/CreateUser.dto';
import { IAuthService } from './auth';
import {
  Controller,
  Inject,
  Post,
  Get,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Routes, SERVICES } from 'src/utils/types';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(SERVICES.AUTH) private authService: IAuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  @Post('login')
  loginUser() {}

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
