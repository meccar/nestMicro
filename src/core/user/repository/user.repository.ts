import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/repository/base.repository';
import { User } from '../entity/user.entity';
import { UserDataSource } from '../user.db';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(readonly repository: Repository<User>) {
    super(repository);
  }
}
