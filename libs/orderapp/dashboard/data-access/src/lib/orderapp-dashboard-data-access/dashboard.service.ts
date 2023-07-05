import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  getOrdersStatForTheDuration(startDateIso: string, endDateIso: string) {
    return 'ok';
  }
}
