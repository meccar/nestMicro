import { IUsecase } from 'src/shared/interface/usecase';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';
import { UpdateUserRequestDto } from '../dto/updateUser.request.dto';
import { mapper } from 'src/shared/utils/mapper';
import { UnauthorizedException } from '@nestjs/common';

export class UpdateUserUsecase implements IUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: [userId: string, UpdateUserRequestDto]): Promise<User> {
    const user = mapper.map(input[1], UpdateUserRequestDto, User);

    const isUser = await this.userRepository.findOne(user.userName);

    if (!isUser) throw new UnauthorizedException();

    return await this.userRepository.update(isUser, user);
  }
}
