import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PosSessionService {
  getPosSessions() {
    return 'sessions';
  }

  createSession() {
    return 'create new';
  }

  closeSession() {
    return 'close session';
  }
}
