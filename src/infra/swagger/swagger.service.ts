import { Injectable } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

@Injectable()
export class SwaggerService {
  private readonly AUTH_OPTIONS: SecuritySchemeObject = {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'Bearer',
  };

  private readonly TOKEN_NAME = 'access-token';

  /**
   * Setup Swagger documentation for a NestJS application
   * @param app The NestJS application instance
   * @param apiPrefix API prefix for the swagger path
   * @param title API title
   * @param description API description
   * @param version API version
   */
  setup(
    app: INestApplication,
    apiPrefix: string,
    title = 'Nestjs Framework',
    description = 'NestJS API documentation',
    version = '1.0.0',
  ): void {
    const options = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addBearerAuth(this.AUTH_OPTIONS, this.TOKEN_NAME)
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(`${apiPrefix}/swagger`, app, document);
  }
}
