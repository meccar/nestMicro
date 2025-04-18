import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { SwaggerModule } from './infra/swagger/swagger.module';

async function bootstrap() {
  // const key = fs.readFileSync('<pathToKeyFile>', 'utf8').toString();
  // const cert = fs.readFileSync('<pathToCertFile>', 'utf8').toString();

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: { host: '127.0.0.1', port: 3002 },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
