import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    
  );
  const config = new DocumentBuilder()
  .setTitle('Softblobs API')
  .setDescription('Softblobs - HR Management Software')
  .setVersion('0.0.1')
  .addBearerAuth()
  .addTag('API')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
