import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Kitchen, PrinterDetail } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class KitchenService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  createKitchen(data: PrinterDetail): Observable<PrinterDetail> {
    return this.httpClient.post<PrinterDetail>(`${this.apiUrl}/kitchen`, data);
  }

  loadKitchens() {
    return this.httpClient.get<Kitchen[]>(`${this.apiUrl}/kitchen`);
  }
}
