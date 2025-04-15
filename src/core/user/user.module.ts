import { Module } from '@nestjs/common';
import { CreateUserUsecase } from './use-case/create-user';
import { UpdateUserUsecase } from './use-case/update-user';
import { GetUserUseCase } from './use-case/get-user';

@Module({
  providers: [CreateUserUsecase, UpdateUserUsecase, GetUserUseCase],
  imports: [],
  exports: [CreateUserUsecase, UpdateUserUsecase, GetUserUseCase],
})
export class UserModule {}
