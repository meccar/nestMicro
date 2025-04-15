import { IUsecase } from 'src/shared/interface/usecase';
import { UserRepository } from '../repository/user.repository';

export class GetUserUseCase implements IUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: unknown[]): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
