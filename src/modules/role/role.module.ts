import { Module } from '@nestjs/common';
import { AppController } from './role.controller';
import { AppService } from '../../core/role/role.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
