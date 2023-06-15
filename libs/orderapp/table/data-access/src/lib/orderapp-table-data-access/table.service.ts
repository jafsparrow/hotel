import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Table } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  loadTables(): Observable<Table[]> {
    return this.httpClient.get<Table[]>(`${this.apiUrl}/tables`);
  }
}
