import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { lastValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>) {}
  
  async login(data: AuthDto): Promise<any>{
    return null
  }
}
