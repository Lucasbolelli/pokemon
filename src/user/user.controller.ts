import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, UpdateUserPasswordDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiInternalServerErrorResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ErrorDto } from 'src/utils/dto/general.dto';

@ApiTags('user')
@ApiBadRequestResponse({ description: 'Bad Request', type: ErrorDto})
@ApiInternalServerErrorResponse({ description: 'Internal Server Erro', type: ErrorDto})
@ApiUnauthorizedResponse({ description: 'Unauthorized', type: ErrorDto})
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get('/findbyemail/:email')
  findByEmail(@Param() email: string) {
    return this.userService.findByEmail(email);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get('/findbyid/:id')
  findById(@Param() id: number) {
    return this.userService.findById(id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Patch(':id')
  update(@Param('id') id: number, @Body() data: UpdateUserDto) {
    data.id = Number(id)
    return this.userService.update(data);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Patch('/updatepassword/:id')
  updatePassword(@Param('id') id: number, @Body() data: UpdateUserPasswordDto) {
    data.id = Number(id)
    return this.userService.updatePassword(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
