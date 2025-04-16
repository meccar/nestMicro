import { Module } from '@nestjs/common';
import { UpdateUserUsecase } from 'src/core/user/use-case/update-user';
import { CreateUserUsecase } from 'src/core/user/use-case/create-user';
import { CreateUserHandler } from './handlers/create-user.handler';
import { UpdateUserHandler } from './handlers/update-user.handler';
import { UserModule } from 'src/core/user/user.module';

const CommandHandlers = [CreateUserHandler, UpdateUserHandler];
// const QueryHandlers = [GetUserHandler, GetUsersHandler];

@Module({
  imports: [UserModule],
  providers: [...CommandHandlers],
})
export class UserHandlerModule {}
