import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { CreateUserCommand } from './commands/create-user.command';
import { UpdateUserCommand } from './commands/update-user.command';
import { GetUserQuery } from './queries/get-user.query';
import { CreateUserInput } from 'src/core/user/input/create-user.input';
import { UpdateUserInput } from 'src/core/user/input/update-user.input';
import { UseInterceptors, UseFilters } from '@nestjs/common';
import { ResponseInterceptor } from 'src/infra/interceptors/response.interceptor';
import { GraphQLErrorFilter } from 'src/infra/filters/error.filter';

@Resolver('User')
@UseInterceptors(ResponseInterceptor)
@UseFilters(GraphQLErrorFilter)
export class UserResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query('getUser')
  public async getUser(@Args('id') id: number) {
    return await this.queryBus.execute(new GetUserQuery(id));
  }

  @Mutation('createUser')
  public async createUser(@Args('input') input: CreateUserInput) {
    return await this.commandBus.execute(new CreateUserCommand(input));
  }

  @Mutation('updateUser')
  public async updateUser(@Args('input') input: UpdateUserInput) {
    return await this.commandBus.execute(new UpdateUserCommand(input));
  }
}
