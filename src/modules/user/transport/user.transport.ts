// import { Injectable } from '@nestjs/common';
// import { MessagePattern, Transport } from '@nestjs/microservices';
// import { CreateUserRequestDto } from 'src/core/user/dto/createUser.request.dto';
// import { CreateUserResponseDto } from 'src/core/user/dto/createUser.response.dto';
// import { UpdateUserRequestDto } from 'src/core/user/dto/updateUser.request.dto';
// import { UpdateUserResponseDto } from 'src/core/user/dto/updateUser.response.dto';
// import { UserCommandGateway } from '../user.gateway';

// @Injectable()
// export class UserCommandTransport {
//   constructor(private readonly userCommandGateway: UserCommandGateway) {}

//   @MessagePattern({ cmd: 'create-user' }, Transport.TCP)
//   public async handleCreateUser(
//     data: CreateUserRequestDto,
//   ): Promise<CreateUserResponseDto> {
//     return await this.userCommandGateway.createUser(data);
//   }

//   @MessagePattern({ cmd: 'update-user' }, Transport.TCP)
//   public async handleUpdateUser(data: {
//     userId: string;
//     updateData: UpdateUserRequestDto;
//   }): Promise<UpdateUserResponseDto> {
//     return await this.userCommandGateway.updateUser(
//       data.userId,
//       data.updateData,
//     );
//   }
// }
