import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { ProxyRMQModule } from 'src/proxyrmq/proxyrmq.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwt-strategy';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { UtilsService } from 'src/utils/utils.service';

@Module({
    imports: [
      PassportModule.register({ defaultStrategy: 'jwt'}),
      ConfigModule.forRoot(),
      JwtModule.register({
          secret: process.env.SECRET_KEY,
          signOptions: {expiresIn: process.env.JWT_EXPIRE}
      }), 
    ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService, UtilsService]
})
export class AuthModule {}
