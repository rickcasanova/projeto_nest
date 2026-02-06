import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  //Encontra todos os registros
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    const receitas = await this.receitasService.findAll(paginationDto);
    return receitas;
  }

  //Encontra um registro
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const receita = await this.receitasService.findOne(id);

    return receita;
  }

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitasService.create(createReceitaDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReceitaDto: UpdateReceitaDto,
  ) {
    return this.receitasService.update(id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.receitasService.remove(id);
  }
}
