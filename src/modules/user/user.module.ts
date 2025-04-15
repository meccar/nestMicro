import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ICreateUserAdapter } from './user.adapter';
import { Repository } from 'typeorm';
import { User } from 'src/core/user/entity/user.entity';
import { UserRepository } from 'src/core/user/repository/user.repository';
import { UpdateUserUsecase } from 'src/core/user/use-case/update-user';
import { CreateUserUsecase } from 'src/core/user/use-case/create-user';

@Module({
  imports: [UpdateUserUsecase, CreateUserUsecase],
  controllers: [UserController],
  providers: [
    CreateUserUsecase,
    UpdateUserUsecase,
    {
      provide: ICreateUserAdapter,
      useFactory: (repository: Repository<User>) => {
        return new UserRepository(repository);
      },
    },
  ],
  exports: [ICreateUserAdapter],
})
export class UserModule {}
