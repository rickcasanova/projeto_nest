import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('receitas')
export class ReceitasController {
    //Encontra todos os registros
    @HttpCode(HttpStatus.OK)
    @Get()
    findAll() {
        return 'Essa rota retorna todas as receitas';
    }
    
    //Encontra um registro
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Essa rota retorna ID ${id}`;
    }

    @Post()
    create(@Body() body: any) {
        return `O valor de receita é ${body.receita} proveniente de ${body.origem}` ;
    }
}
