import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/repository/base.repository';
import { User } from './entity/user.entity';
import { UserDataSource } from './user.db';

@Injectable()
export class UserService extends BaseRepository<User> {
  constructor() {
    super(
      UserDataSource.getRepository(User)
    )
  }
}
