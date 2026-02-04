import { Controller, Get } from '@nestjs/common';
import { ConceitosAutomaticoService } from '../services/conceitos-automatico.service';

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
    constructor (private readonly conceitosAutomaticoService: ConceitosAutomaticoService) {}

    @Get()
    home(): string {
        return this.conceitosAutomaticoService.getHome();
    }
}
