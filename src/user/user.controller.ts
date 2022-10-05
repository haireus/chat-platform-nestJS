import { IUserService } from './user';
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

@Controller(Routes.USER)
export class AuthController {
  constructor(@Inject(SERVICES.USER) private userService: IUserService) {}
}
