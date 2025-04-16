import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { CreateUserUsecase } from 'src/core/user/use-case/create-user';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly createUserUseCase: CreateUserUsecase) {}

  async execute(command: CreateUserCommand) {
    return await this.createUserUseCase.execute(command.payload);
  }
}
