import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/infra/database/repository/base.repository';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from 'src/core/user/entity/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  constructor(protected readonly dataSource: DataSource) {
    super(UserEntity, dataSource);
  }
}
