import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Floor, Table } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableService {
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

  createTable(data: Table): Observable<Table> {
    return this.httpClient.post<Table>(`${this.apiUrl}/table`, data);
  }

  updateTable(tableId: number, data: Table): Observable<Table> {
    return this.httpClient.put<Table>(`${this.apiUrl}/table/${tableId}`, data);
  }
}
