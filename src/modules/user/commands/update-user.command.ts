import { UpdateUserInput } from 'src/core/graphql/graphql';

export class UpdateUserCommand {
  constructor(public readonly payload: UpdateUserInput) {}
}
