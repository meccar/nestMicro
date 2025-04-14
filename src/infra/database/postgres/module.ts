import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgressService } from './service';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<TypeOrmModuleOptions> => {
        const conn = new PostgressService().getConnection({
          URI: 'POSTGRES_URL',
        });
        return {
          ...conn,
          logging: process.env.NODE_ENV === 'dev',
          autoLoadEntities: true,
          namingStrategy: new SnakeNamingStrategy(),
          synchronize: process.env.NODE_ENV === 'dev',
          migrationsRun: process.env.NODE_ENV === 'dev',
          migrationsTableName: '',
          migrations: [path.join(__dirname, '/migrations/*.{ts,js}')],
          entities: [path.join(__dirname, '../../../core/**/entity/*.{ts,js}')],
          applicationName: 'name',
          extra: {
            connectionTimeoutMillis: 10000,
            idleTimeoutMillis: 30000,
            max: 90,
            min: 10,
          },
        };
      },

      dataSourceFactory: async (options) => {
        const dataSource = new DataSource(options as DataSourceOptions);
        return dataSource.initialize();
      },
    }),
  ],
})
export class PostgresDatabaseModule {}
