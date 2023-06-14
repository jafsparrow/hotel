import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Organisation } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}
  loadCompany(id: number) {
    return this.httpClient.get<Organisation>(`${this.apiUrl}/company/`);
  }

  updateCompany(data: Organisation): Observable<Organisation> {
    console.log('at the company service file', data);
    return this.httpClient.post<Organisation>(`${this.apiUrl}/company`, data);
  }
}
