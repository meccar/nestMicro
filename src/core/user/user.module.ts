import { Module } from '@nestjs/common';
import { CreateUserUsecase } from './use-case/create-user';
import { UpdateUserUsecase } from './use-case/update-user';
import { GetUserUseCase } from './use-case/get-user';
import { UserProfile } from './mapper/user.mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { UserRepository } from 'src/infra/database/repository/user.repository';
import { TransactionService } from 'src/infra/database/transaction/transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    TransactionService,
    UserRepository,
    UserProfile,
    CreateUserUsecase,
    UpdateUserUsecase,
    GetUserUseCase,
  ],
  exports: [UserRepository, CreateUserUsecase, UpdateUserUsecase],
})
export class UserModule {}
