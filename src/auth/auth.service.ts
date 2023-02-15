import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup(): string {
    return 'Hello World! from the sign up';
  }

  signin(): string {
    return 'Hello World! from the sign in';
  }
}
