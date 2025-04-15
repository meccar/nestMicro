import { IUsecase } from 'src/shared/interface/usecase';
import { UserRepository } from '../repository/user.repository';
import { User } from '../entity/user.entity';
import { CreateUserRequestDto } from '../dto/createUser.request.dto';
import { mapper } from 'src/shared/utils/mapper';

export class CreateUserUsecase implements IUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(...input: [CreateUserRequestDto]): Promise<User> {
    const user = mapper.map(input[0], CreateUserRequestDto, User);
    return this.userRepository.create(user);
  }
}
