import { IUserService } from './../user/user';
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
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Routes, SERVICES } from 'src/utils/types';
import { instanceToPlain } from 'class-transformer';
import { UserLoginDto } from './dtos/UserLogin.dto';
import { LocalAuthGuard } from 'src/auth/utils/guards';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(SERVICES.AUTH) private authService: IAuthService,
    @Inject(SERVICES.USER) private userService: IUserService,
  ) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return instanceToPlain(await this.userService.createUser(createUserDto));
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  loginUser(@Res() res: Response) {
    return res.sendStatus(HttpStatus.OK);
  }

  @Get('status')
  status() {}

  @Post('logout')
  logout() {}
}
