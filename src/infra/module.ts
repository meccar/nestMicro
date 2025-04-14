import { Module } from '@nestjs/common';
import { PostgresDatabaseModule } from './database/postgres/module';

@Module({
  imports: [PostgresDatabaseModule],
})
export class InfraModule {}
