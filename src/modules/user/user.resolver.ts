import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserCommand } from './commands/create-user.command';
import { UpdateUserCommand } from './commands/update-user.command';
import { UserOutput } from 'src/core/user/output/user.output';
import { GetUserQuery } from './queries/get-user.query';
import { CreateUserInput } from 'src/core/user/input/create-user.input';
import { UpdateUserInput } from 'src/core/user/input/update-user.input';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => UserOutput, { name: 'getUser' })
  public async getUser(@Args('id') id: number) {
    return await this.queryBus.execute(new GetUserQuery(id));
  }

  @Mutation(() => UserOutput, { name: 'createUser' })
  public async createUser(@Args('input') input: CreateUserInput) {
    return await this.commandBus.execute(new CreateUserCommand(input));
  }

  @Mutation(() => UserOutput, { name: 'updateUser' })
  public async updateUser(@Args('input') input: UpdateUserInput) {
    return await this.commandBus.execute(new UpdateUserCommand(input));
  }
}
