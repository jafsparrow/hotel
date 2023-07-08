import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PosSession } from '@hotel/common/types';
import { Observable, catchError, of, switchMap } from 'rxjs';

import { saveAs } from 'file-saver';

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

  printSessionReport(id: number) {
    let status = false;
    const mediaType = 'application/pdf';
    return this.httpClient
      .get(`${this.apiUrl}/session/session/${id}`, {
        observe: 'response',
        responseType: 'blob',
      })
      .pipe(
        switchMap((response) => {
          status = true;
          console.log(response);
          const blob = new Blob([response.body!], { type: mediaType });

          console.log(response.headers!.get('content-disposition'));
          // const fileName = response
          //   .headers!.get('Content-Disposition')!
          //   .split(';')[1]
          //   .split('=')[1];
          saveAs(blob, `${new Date()}.pdf`);
          return of(true);
        }),
        catchError((error) => of(false))
      );
  }
}
