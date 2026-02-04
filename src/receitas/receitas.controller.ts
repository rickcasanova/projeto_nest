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

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  //Encontra todos os registros
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    return this.receitasService.findAll();
  }

  //Encontra um registro
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.receitasService.findOne(id);
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
