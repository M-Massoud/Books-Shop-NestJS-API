import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('signup')
  signup(): string {
    return this.authService.signup();
  }

  @Get('signin')
  signin(): string {
    return this.authService.signin();
  }
}
