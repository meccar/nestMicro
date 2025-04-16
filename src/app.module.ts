import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as fs from 'fs';
import { InfraModule } from './infra/module';
import { PresentationModule } from './modules/module';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    InfraModule,
    PresentationModule,
    CqrsModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.graphql'],
      autoSchemaFile: true,
      definitions: {
        path: join(process.cwd(), './core/graphql/graphql.ts'),
        outputAs: 'interface',
      },
    }),
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
