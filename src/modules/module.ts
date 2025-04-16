import { Module } from '@nestjs/common';
import { UserHandlerModule } from './user/user.module';
import { UserResolver } from './user/user.resolver';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [UserHandlerModule, CqrsModule],
  providers: [UserResolver],
})
export class PresentationModule {}
