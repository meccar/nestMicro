import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionType, IDataBaseAdapter } from '../adapter';
import { Injectable } from '@nestjs/common';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class PostgressService implements Partial<IDataBaseAdapter> {
  getConnection<TOpt = TypeOrmModuleOptions>(): TOpt {
    return {
      type: 'postgres',
      database: 'name',
      logging: process.env.NODE_ENV === 'dev',
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: process.env.NODE_ENV === 'dev',
      migrationsRun: process.env.NODE_ENV === 'dev',
      migrationsTableName: '',
      // migrations: [path.resolve(__dirname, '/migrations/*.{ts,js}')],
      entities: ['../../../core/**/entity/*.{ts,js}'],
      applicationName: 'name',
      extra: {
        connectionTimeoutMillis: 10000,
        idleTimeoutMillis: 30000,
        max: 90,
        min: 10,
      },
    } as TOpt;
  }
}
