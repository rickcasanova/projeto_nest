import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from 'src/receitas/receitas.module';

@Module({
  imports: [ReceitasModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
