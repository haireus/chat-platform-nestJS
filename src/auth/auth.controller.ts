import { IAuthService } from './auth';
import { Controller, Inject } from '@nestjs/common';
import { Routes, SERVICES } from 'src/utils/types';

@Controller(Routes.AUTH)
export class AuthController {
  constructor(@Inject(SERVICES.AUTH) private authService: IAuthService) {}
}
