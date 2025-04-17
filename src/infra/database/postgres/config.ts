import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/user/entity/user.entity';
import { EnvironmentService } from 'src/infra/environment/environment.service';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const getTypeOrmModuleOptions = (
  config: EnvironmentService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.getPostgresHost(),
  port: config.getPostgresPort(),
  username: config.getPostgresUsername(),
  password: config.getPostgresPassword(),
  database: config.getPostgresDatabase(),
  namingStrategy: new SnakeNamingStrategy(),
  logging: config.isDev(),
  synchronize: config.isDev(),
  migrationsRun: config.isDev(),
  migrationsTableName: 'migrations',
  // migrations: [path.join(__dirname, '/migrations/*.{ts,js}')],
  // entities: ['../../../core/**/entity/*.{ts,js}'],
  entities: [UserEntity],
});
