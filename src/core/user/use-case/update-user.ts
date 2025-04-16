import { IUsecase } from 'src/shared/interface/usecase';
import { UserRepository } from '../repository/user.repository';
import { UserEntity } from '../entity/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UpdateUserInput } from '../input/update-user.input';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class UpdateUserUsecase
  implements IUsecase<UpdateUserInput, UserEntity>
{
  constructor(
    private readonly userRepository: UserRepository,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async execute(input: UpdateUserInput): Promise<UserEntity> {
    const user = this.mapper.map(input, UpdateUserInput, UserEntity);

    const isUser = await this.userRepository.findOne(user.id);

    if (!isUser) throw new UnauthorizedException();

    return await this.userRepository.update(isUser, user);
  }
}
