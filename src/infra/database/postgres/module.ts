import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getTypeOrmModuleOptions } from './config';
import { DataSource } from 'typeorm';
import { EnvironmentService } from 'src/infra/environment/environment.service';
import { EnvironmentModule } from 'src/infra/environment/environment.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: getTypeOrmModuleOptions,
      dataSourceFactory: async (options) => new DataSource(options!),
    }),
    TypeOrmModule.forFeature([]),
  ],
  exports: [TypeOrmModule],
})
export class PostgresDatabaseModule {}
