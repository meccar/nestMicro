// import { CommandBus } from '@nestjs/cqrs';
// import { CreateUserRequestDto } from 'src/core/user/dto/createUser.request.dto';
// import { CreateUserResponseDto } from 'src/core/user/dto/createUser.response.dto';
// import { mapper } from 'src/shared/utils/mapper';
// import { User } from 'src/core/user/entity/user.entity';
// import { UpdateUserRequestDto } from 'src/core/user/dto/updateUser.request.dto';
// import { UpdateUserResponseDto } from 'src/core/user/dto/updateUser.response.dto';
// import { CreateUserCommand } from './commands/create-user.command';
// import { UpdateUserCommand } from './commands/update-user.command';

// export class UserCommandGateway {
//   constructor(private readonly commandBus: CommandBus) {}

//   public async createUser(
//     createUserDto: CreateUserRequestDto,
//   ): Promise<CreateUserResponseDto> {
//     const command = new CreateUserCommand(createUserDto);
//     const result = await this.commandBus.execute(command);
//     return mapper.map(result, User, CreateUserResponseDto);
//   }

//   public async updateUser(
//     userId: string,
//     updateUserDto: UpdateUserRequestDto,
//   ): Promise<UpdateUserResponseDto> {
//     const command = new UpdateUserCommand(userId, updateUserDto);
//     const result = await this.commandBus.execute(command);
//     return mapper.map(result, User, UpdateUserResponseDto);
//   }
// }
