import { IUsecase } from 'src/shared/interface/usecase';
import { UserRepository } from '../repository/user.repository';
import { UserEntity } from '../entity/user.entity';
import { ulid } from 'ulid';
import { CreateUserInput } from '../input/create-user.input';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUsecase
  implements IUsecase<CreateUserInput, UserEntity>
{
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(input: CreateUserInput): Promise<UserEntity> {
    const user = this.mapper.map(input, CreateUserInput, UserEntity);
    user.code = ulid();
    return this.userRepository.create(user);
  }
}
