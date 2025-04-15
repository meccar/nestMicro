import {
  addProfile,
  CamelCaseNamingConvention,
  createMap,
  MappingProfile,
  namingConventions,
} from '@automapper/core';
import { CreateUserRequestDto } from 'src/core/user/dto/createUser.request.dto';
import { CreateUserResponseDto } from 'src/core/user/dto/createUser.response.dto';
import { User } from 'src/core/user/entity/user.entity';
import { mapper } from 'src/shared/utils/mapper';
import { UpdateUserRequestDto } from '../dto/updateUser.request.dto';
import { UpdateUserResponseDto } from '../dto/updateUser.response.dto';

const userProfile: MappingProfile = (mapper) => {
  createMap(mapper, CreateUserRequestDto, User);
  createMap(mapper, User, CreateUserResponseDto);
  createMap(mapper, UpdateUserRequestDto, User);
  createMap(mapper, User, UpdateUserResponseDto);
};

addProfile(
  mapper,
  userProfile,
  namingConventions(new CamelCaseNamingConvention()),
);
