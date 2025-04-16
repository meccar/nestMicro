import { Module } from '@nestjs/common';
import { CreateUserUsecase } from './use-case/create-user';
import { UpdateUserUsecase } from './use-case/update-user';
import { GetUserUseCase } from './use-case/get-user';
import { UserProfile } from './mapper/user.mapper';
import { UserRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserRepository,
    UserProfile,
    CreateUserUsecase,
    UpdateUserUsecase,
    GetUserUseCase,
  ],
  exports: [UserRepository, CreateUserUsecase, UpdateUserUsecase],
})
export class UserModule {}
