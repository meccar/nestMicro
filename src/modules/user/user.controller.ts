// import {
//   Body,
//   Controller,
//   HttpCode,
//   HttpStatus,
//   Post,
//   Put,
//   Query,
// } from '@nestjs/common';
// import { CreateUserRequestDto } from '../../core/user/dto/createUser.request.dto';
// import { CreateUserResponseDto } from '../../core/user/dto/createUser.response.dto';
// import { UpdateUserRequestDto } from '../../core/user/dto/updateUser.request.dto';
// import { UpdateUserResponseDto } from '../../core/user/dto/updateUser.response.dto';
// import { MessagePattern } from '@nestjs/microservices';
// import { CreateUserUsecase } from 'src/core/user/use-case/create-user';
// import { mapper } from 'src/shared/utils/mapper';
// import { User } from 'src/core/user/entity/user.entity';
// import { UpdateUserUsecase } from 'src/core/user/use-case/update-user';
// import {
//   ApiBody,
//   ApiOperation,
//   ApiQuery,
//   ApiResponse,
//   ApiTags,
// } from '@nestjs/swagger';

// @ApiTags('user')
// @Controller('user')
// export class UserController {
//   constructor(
//     private readonly createUserUsecase: CreateUserUsecase,
//     private readonly updateUserUsecase: UpdateUserUsecase,
//   ) {}

//   @Post()
//   @HttpCode(HttpStatus.CREATED)
//   @ApiOperation({ description: 'Create user' })
//   @ApiBody({ type: CreateUserRequestDto })
//   @MessagePattern({ role: 'user', cmd: 'create' })
//   @ApiResponse({
//     status: HttpStatus.CREATED,
//     description: 'User successfully created',
//     type: CreateUserResponseDto,
//   })
//   @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
//   public async createUser(
//     @Body() createUserRequestDto: CreateUserRequestDto,
//   ): Promise<CreateUserResponseDto> {
//     const result = await this.createUserUsecase.execute(createUserRequestDto);
//     return mapper.map(result, User, CreateUserResponseDto);
//   }

//   @Put()
//   @HttpCode(HttpStatus.OK)
//   @ApiOperation({ description: 'Create user' })
//   @ApiQuery({
//     name: 'userId',
//     type: String,
//     description: 'The ID of the user to update',
//   })
//   @ApiBody({ type: UpdateUserRequestDto })
//   @MessagePattern({ role: 'user', cmd: 'update' })
//   @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
//   @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found' })
//   public async updateUser(
//     @Query() userId,
//     @Body() updateUserRequestDto: UpdateUserRequestDto,
//   ): Promise<UpdateUserResponseDto> {
//     const result = await this.updateUserUsecase.execute([
//       userId,
//       updateUserRequestDto,
//     ]);
//     return mapper.map(result, User, UpdateUserResponseDto);
//   }
// }
