import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Organisation } from '@hotel/common/types';

@Injectable()
export class CompanyService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}
  loadCompany(id: number) {
    return this.httpClient.get<Organisation>(`${this.apiUrl}/company/${id}`);
  }
}
