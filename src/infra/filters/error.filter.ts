import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch()
export class GraphQLErrorFilter implements GqlExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const message =
      exception instanceof HttpException
        ? exception.message
        : exception.message;

    return new GraphQLError(message, {
      extensions: {
        code:
          exception instanceof HttpException
            ? exception.getStatus()
            : 'INTERNAL_SERVER_ERROR',
        status: false,
      },
    });
  }
}
