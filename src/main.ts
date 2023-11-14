import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NotFoundErrorinterceptor } from './error/interceptor/notfounderror.interceptor';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true });

    // const basicAuth = require('express-basic-auth');
    // app.use(
    //     ['/swagger-ui', '/docs-json'],
    //     basicAuth({
    //         challenge: true,
    //         users: {
    //             'admin': 'R&SLabs123'
    //         }
    //     })
    // );

    const options = new DocumentBuilder()
        .setTitle('Estudo Nestjs')
        .setDescription('Descrição')
        .setVersion('3.1.4')
        .addBearerAuth({type: 'http', scheme: 'bearer', bearerFormat: 'Bearer'}, 'access-token')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
    
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
  }),
);
  app.useGlobalInterceptors(new NotFoundErrorinterceptor())
  await app.listen(3000);
}
bootstrap();