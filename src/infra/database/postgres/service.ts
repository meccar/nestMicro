import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IDataBaseAdapter } from '../adapter';
import { Injectable } from '@nestjs/common';
import { getTypeOrmModuleOptions } from './config';

@Injectable()
export class PostgressService implements Partial<IDataBaseAdapter> {
  getConnection<TOpt = TypeOrmModuleOptions>(): TOpt {
    return getTypeOrmModuleOptions as TOpt;
  }
}
