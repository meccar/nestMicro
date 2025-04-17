import { IUsecase } from 'src/shared/interfaces/usecase';
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/database/repository/user.repository';

@Injectable()
export class GetUserUseCase implements IUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: unknown[]): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
