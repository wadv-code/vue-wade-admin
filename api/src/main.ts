// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TransformInterceptor } from './core/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 前缀
  app.setGlobalPrefix('api');
  // 启用CORS
  app.enableCors();
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // API DOCS
  const config = new DocumentBuilder()
    .setTitle('Wade API')
    .setDescription('The Wade API Description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);
  // START
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
