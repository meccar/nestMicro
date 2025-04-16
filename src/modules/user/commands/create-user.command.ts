import { CreateUserInput } from 'src/core/graphql/graphql';

export class CreateUserCommand {
  constructor(public readonly payload: CreateUserInput) {}
}
