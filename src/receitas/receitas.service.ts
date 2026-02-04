import { Injectable, NotFoundException } from '@nestjs/common';
import { Receita } from './entities/receita.entity';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitasService {
  private lastId = 1;
  private receitas: Receita[] = [
    {
      id: 1,
      receita: 3500.0,
      origem: 'Dividendos',
      responsavel: 'Ricardo',
      data: new Date(),
    },
  ];

  throwNotFoundError() {
    throw new NotFoundException('Receita não encontrada');
  }

  findAll() {
    return this.receitas;
  }

  findOne(id: number) {
    const receita = this.receitas.find((item) => item.id === id);

    if (receita) return receita;
    this.throwNotFoundError();
  }

  create(createReceitaDto: CreateReceitaDto) {
    this.lastId++;

    const id = this.lastId;
    const newReceita = {
      id,
      ...createReceitaDto,
      data: new Date(),
    };
    this.receitas.push(newReceita);

    return newReceita;
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    const receitaExistenteIndex = this.receitas.findIndex(
      (item) => item.id === id,
    );

    if (receitaExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    const receitaExistente = this.receitas[receitaExistenteIndex];

    this.receitas[receitaExistenteIndex] = {
      ...receitaExistente,
      ...updateReceitaDto,
    };

    return this.receitas[receitaExistenteIndex];
  }

  remove(id: number) {
    const receitaExistenteIndex = this.receitas.findIndex(
      (item) => item.id === id,
    );

    if (receitaExistenteIndex < 0) {
      this.throwNotFoundError();
    }

    this.receitas.splice(receitaExistenteIndex, 1);

    return 'Excluído com sucesso.';
  }
}
