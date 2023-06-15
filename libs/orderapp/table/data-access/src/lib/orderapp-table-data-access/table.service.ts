import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Floor, Table } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  loadFloors(): Observable<Floor[]> {
    console.log('load table is called');
    return this.httpClient.get<Floor[]>(`${this.apiUrl}/floor`);
  }

  loadFloorTables(id: number): Observable<Floor> {
    console.log('load table is called');
    return this.httpClient.get<Floor>(`${this.apiUrl}/floor/${id}`);
  }
}
