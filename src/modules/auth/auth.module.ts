import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthMiddleware } from './auth.middleware';
import { UserModule } from '../user/user.module';

@Global()
@Module({
  imports: [UserModule],
  providers: [AuthService, AuthMiddleware],
  exports: [AuthService],
})
export class AuthModule {} 