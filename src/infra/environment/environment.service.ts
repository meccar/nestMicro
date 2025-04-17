import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentService {
  constructor(private configService: ConfigService) {}

  isDev(): boolean {
    return this.configService.get<string>('NODE_ENV') === 'dev';
  }

  getSalt(): number {
    const salt = this.configService.get<number>('SALT');
    if (!salt) throw new Error('SALT is not defined');

    return salt;
  }

  getPostgresHost(): string {
    const host = this.configService.get<string>('POSTGRES_HOST');
    if (!host) throw new Error('POSTGRES_HOST is not defined');

    return host;
  }

  getPostgresPort(): number {
    const port = this.configService.get<number>('POSTGRES_PORT');
    if (!port) throw new Error('POSTGRES_PORT is not defined');

    return port;
  }

  getPostgresUsername(): string {
    const username = this.configService.get<string>('POSTGRES_USER');
    if (!username) throw new Error('POSTGRES_USER is not defined');

    return username;
  }

  getPostgresPassword(): string {
    const password = this.configService.get<string>('POSTGRES_PASSWORD');
    if (!password) throw new Error('POSTGRES_PASSWORD is not defined');

    return password;
  }

  getPostgresDatabase(): string {
    const database = this.configService.get<string>('POSTGRES_DATABASE');
    if (!database) throw new Error('POSTGRES_DATABASE is not defined');

    return database;
  }
}
