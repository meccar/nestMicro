import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../commands/update-user.command';
import { UpdateUserUsecase } from 'src/core/user/use-case/update-user';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(private readonly updateUserUseCase: UpdateUserUsecase) {}

  async execute(command: UpdateUserCommand) {
    return await this.updateUserUseCase.execute(command.payload);
  }
}
