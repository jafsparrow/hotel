import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PosSession } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PosSessionService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}
  getPosSessions(): Observable<PosSession[]> {
    return this.httpClient.get<PosSession[]>(`${this.apiUrl}/session`);
  }

  createSession(startCash: number): Observable<PosSession[]> {
    return this.httpClient.post<PosSession[]>(`${this.apiUrl}/session`, {
      cash: startCash,
    });
  }

  closeSession(id: number): Observable<PosSession[]> {
    return this.httpClient.put<PosSession[]>(
      `${this.apiUrl}/session/${id}`,
      {}
    );
  }

  printSessionReport(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/session/session/${id}`);
  }
}
