import { IUsecase } from 'src/shared/interfaces/usecase';
import { UserEntity } from '../entity/user.entity';
import { ulid } from 'ulid';
import { CreateUserInput } from '../input/create-user.input';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Authen } from 'src/shared/constants/authen';
import { UserRepository } from 'src/infra/database/repository/user.repository';
import { TransactionService } from 'src/infra/database/transaction/transaction.service';
import { Transaction } from 'src/shared/decorators/transaction.decorator';

@Injectable()
export class CreateUserUsecase
  implements IUsecase<CreateUserInput, UserEntity>
{
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly userRepository: UserRepository,
    private readonly transactionService: TransactionService
  ) {}

  @Transaction()
  public async execute(input: CreateUserInput): Promise<UserEntity> {
    const existingUser = await this.userRepository.findOne([
      { email: input.email },
      { userName: input.userName },
    ]);
    if (existingUser)
      throw new BadRequestException('Email or username already existed');

    input.password = await bcrypt.hash(input.password, Authen.salt);
    input.email = await bcrypt.hash(input.email, Authen.salt);

    const user = await this.mapper.mapAsync(input, CreateUserInput, UserEntity);

    user.code = ulid();
    user.createdBy = user.userName;
    user.updatedBy = user.userName;

    return await this.userRepository.create(user);
  }
}
