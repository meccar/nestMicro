import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from '../interceptors/response.interceptor';
import { GraphQLErrorFilter } from '../filters/error.filter';
import * as depthLimit from 'graphql-depth-limit';
import { EnvironmentModule } from '../environment/environment.module';
import { EnvironmentService } from '../environment/environment.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: (config: EnvironmentService) => ({
        typePaths: ['./src/**/*.graphql'],
        definitions: {
          path: join(process.cwd(), 'src/core/graphql/graphql.ts'),
          outputAs: 'class',
          playground: config.isDev(),
        },
        introspection: config.isDev(),
        validationRules: [depthLimit(5)],
        formatError: (error) => {
          const originalError = error.extensions?.originalError as {
            message?: string;
          };
          const message = originalError?.message || 'Internal Server Error';

          return {
            message,
            extensions: {
              code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
              ...(config.isDev() && {
                stacktrace:
                  (error.extensions as any).exception?.stacktrace || [],
                originalError,
              }),
            },
            ...(config.isDev() && {
              locations: error.locations,
              path: error.path,
            }),
          };
        },
      }),
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: GraphQLErrorFilter,
    },
  ],
})
export class GraphQLConfigModule {}
