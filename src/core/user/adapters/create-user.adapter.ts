import { IUsecase } from 'src/shared/interface/usecase';
import { CreateUserInput } from '../input/create-user.input';
import { UserOutput } from '../output/user.output';

export abstract class ICreateUserAdapter implements IUsecase {
  abstract execute(input: CreateUserInput): Promise<UserOutput>;
}
