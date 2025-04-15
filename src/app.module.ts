import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as fs from 'fs';
import { InfraModule } from './infra/module';
import { PresentationModule } from './modules/module';
import { CoreModule } from './core/module';

@Module({
  imports: [
    CoreModule,
    InfraModule,
    PresentationModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        // options: {
        //   tlsOptions: {
        //     ca: [fs.readFileSync('<pathToCaFile>', 'utf-8').toString()],
        //   },
        // },
      },
    ]),
  ],
  providers: [],
})
export class AppModule {}
