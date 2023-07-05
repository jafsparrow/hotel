import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProductStat } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  constructor(
    private http: HttpClient,
    @Inject('endPointURL') public apiUrl: string
  ) {}

  getOrdersStatForTheDuration(startDateIso: string, endDateIso: string) {
    return 'ok';
  }

  getProductStatsForTheDuration(
    startDateIso: string,
    endDateIso: string
  ): Observable<ProductStat[]> {
    const options = new HttpParams()
      .append('startDate', startDateIso)
      .append('endDate', endDateIso);

    console.log(options);
    return this.http.get<ProductStat[]>(`${this.apiUrl}/stats/product`, {
      params: options,
    });
  }
}
