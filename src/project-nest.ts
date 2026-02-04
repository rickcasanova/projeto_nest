import { Module } from '@nestjs/common';
import { ConceitosManualController } from './controllers/conceitos-manual.controller';
import { ConceitosManualService } from './services/conceitos-manual.service';
import { ConceitosAutomaticoController } from './controllers/conceitos-automatico.controller';
import { ConceitosAutomaticoService } from './services/conceitos-automatico.service';
import { ReceitasController } from './controllers/receitas.controller';

@Module({
    imports: [],
    controllers: [
        ConceitosAutomaticoController,
        ConceitosManualController,
        ReceitasController
    ],
    providers: [
        ConceitosAutomaticoService,
        ConceitosManualService
    ],
    exports: [],
})
export class ProjectNestModule { }
