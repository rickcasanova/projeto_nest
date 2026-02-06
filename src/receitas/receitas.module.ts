import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './entities/receita.entity';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Receita]), PessoasModule],
  controllers: [ReceitasController],
  providers: [ReceitasService],
})
export class ReceitasModule {}
