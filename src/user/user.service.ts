import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserPasswordDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
                  private readonly userRepository: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto)
  }

  findAll() {
    return this.userRepository.find()
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({where:{email:email}})
  }

  findById(id: number) {
    return this.userRepository.findOne({where:{id:id}})
  }

  update(data: UpdateUserDto) {
    return this.userRepository.update(data.id, data)
  }

  updatePassword(data: UpdateUserPasswordDto) {
    return this.userRepository.update(data.id, data)
  }

  remove(id: number) {
    return this.userRepository.delete(id)
  }
}