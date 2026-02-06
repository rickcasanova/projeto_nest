import { Injectable, NotFoundException } from '@nestjs/common';
import { Receita } from './entities/receita.entity';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ReceitasService {
  constructor(
    @InjectRepository(Receita)
    private readonly receitaRepository: Repository<Receita>,
    private readonly pessoasService: PessoasService,
  ) {}

  throwNotFoundError(): never {
    throw new NotFoundException('Receita não encontrada');
  }

  async findAll(paginationDto?: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto || {};

    const receitas = await this.receitaRepository.find({
      take: limit,
      skip: offset,
      relations: ['responsavel'],
      order: {
        id: 'desc',
      },
      select: {
        id: true,
        responsavel: true,
      },
    });

    return receitas;
  }

  async findOne(id: number) {
    const receita = await this.receitaRepository.findOne({
      where: {
        id,
      },
      relations: ['responsavel'],
      order: {
        id: 'desc',
      },
      select: {
        id: true,
        responsavel: true,
      },
    });

    if (receita) return receita;
    this.throwNotFoundError();
  }

  async create(createReceitaDto: CreateReceitaDto) {
    const { responsavelId } = createReceitaDto;
    const responsavel = await this.pessoasService.findOne(responsavelId);

    const newReceita = {
      receita: createReceitaDto.receita,
      origem: createReceitaDto.origem,
      responsavel,
      data: new Date(),
    };

    const receita = this.receitaRepository.create(newReceita);
    await this.receitaRepository.save(receita);
    return {
      ...receita,
      responsavel: {
        id: receita.responsavel.id,
      },
    };
  }

  async update(id: number, updateReceitaDto: UpdateReceitaDto) {
    const receita = await this.findOne(id);

    receita.receita = updateReceitaDto?.receita ?? receita.receita;
    receita.origem = updateReceitaDto?.origem ?? receita.origem;
    await this.receitaRepository.save(receita);

    return receita;
  }

  async remove(id: number) {
    const receita = await this.receitaRepository.findOneBy({
      id,
    });

    if (receita) return this.receitaRepository.remove(receita);
    this.throwNotFoundError();
  }
}
