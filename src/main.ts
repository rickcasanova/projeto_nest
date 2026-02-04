import { NestFactory } from '@nestjs/core';
import { ProjectNestModule } from './project-nest';

async function bootstrap() {
  const app = await NestFactory.create(ProjectNestModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
