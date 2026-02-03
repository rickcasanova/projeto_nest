import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';
import { ReceitasController } from 'src/receitas/receitas.controller';
import { ReceitasModule } from 'src/receitas/receitas.module';

@Module({
  imports: [ReceitasModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
