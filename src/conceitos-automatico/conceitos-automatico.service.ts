import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  getHome() {
    return 'home do conceitos automatico service';
  }
}
