import { createMap, MappingProfile } from '@automapper/core';
import { UserEntity } from 'src/core/user/entity/user.entity';
import { CreateUserInput } from '../input/create-user.input';
import { UpdateUserInput } from '../input/update-user.input';
import { UserOutput } from '../output/user.output';
import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, CreateUserInput, UserEntity);
      createMap(mapper, UserEntity, UserOutput);
      createMap(mapper, UpdateUserInput, UserEntity);
    };
  }
}
