import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserRequestDto } from './dto/createUser.request.dto';
import { CreateUserResponseDto } from './dto/createUser.response.dto';
import { UpdateUserRequestDto } from './dto/updateUser.request.dto';
import { UpdateUserResponseDto } from './dto/updateUser.response.dto';
import { UserService } from 'src/core/user/user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @MessagePattern({ role: 'user', cmd: 'create' })
  public async createUser(
    @Body() createUserRequestDto: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return await this.userService.create(createUserRequestDto);
  }

  @Put()
  @MessagePattern({ role: 'user', cmd: 'update' })
  public async updateUser(
    @Query() userId,
    @Body() updateUserRequestDto: UpdateUserRequestDto,
  ): Promise<UpdateUserResponseDto> {
    const result = await this.userService.update(userId, updateUserRequestDto);
    if (!result) throw new BadRequestException();
    return result;
  }
}
