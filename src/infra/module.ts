import { Module } from '@nestjs/common';
import { PostgresDatabaseModule } from './database/postgres/module';
import { EnvironmentModule } from './environment/environment.module';
import { SwaggerModule } from './swagger/swagger.module';

@Module({
  imports: [
    PostgresDatabaseModule,
    EnvironmentModule,
    SwaggerModule.forRoot({
      apiPrefix: 'api',
      title: 'My API',
      description: 'This is my API documentation',
      version: '1.0.0',
    }),
  ],
})
export class InfraModule {}
