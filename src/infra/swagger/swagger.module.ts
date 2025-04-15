import { INestApplication, Inject, Module } from '@nestjs/common';
import { SwaggerService } from './swagger.service';

export interface SwaggerOptions {
  apiPrefix: string;
  title?: string;
  description?: string;
  version?: string;
}

@Module({
  providers: [SwaggerService],
  exports: [SwaggerService],
})
export class SwaggerModule {
  constructor(
    private swaggerService: SwaggerService,
    @Inject('SWAGGER_OPTIONS') private options: SwaggerOptions,
  ) {}

  static forRoot(options: SwaggerOptions) {
    return {
      module: SwaggerModule,
      providers: [
        {
          provide: 'SWAGGER_OPTIONS',
          useValue: options,
        },
      ],
    };
  }

  onModuleInit() {}

  setupSwagger(app: INestApplication) {
    this.swaggerService.setup(
      app,
      this.options.apiPrefix,
      this.options.title,
      this.options.description,
      this.options.version,
    );
  }
}
