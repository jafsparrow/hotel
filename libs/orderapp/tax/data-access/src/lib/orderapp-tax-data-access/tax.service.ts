import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Tax } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaxService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  createTax(data: Tax): Observable<Tax> {
    return this.httpClient.post<Tax>(`${this.apiUrl}/tax`, data);
  }

  updateTax(taxId: number, data: Tax): Observable<Tax> {
    return this.httpClient.put<Tax>(`${this.apiUrl}/tax/${taxId}`, data);
  }
  loadTaxes() {
    return this.httpClient.get<Tax[]>(`${this.apiUrl}/tax`);
  }
}
