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

  createKitchen(data: Kitchen): Observable<Kitchen> {
    return this.httpClient.post<Kitchen>(`${this.apiUrl}/kitchen`, data);
  }

  updateKitchen(kitchenId: number, data: Kitchen): Observable<Kitchen> {
    return this.httpClient.put<Kitchen>(
      `${this.apiUrl}/kitchen/${kitchenId}`,
      data
    );
  }
  loadKitchens() {
    return this.httpClient.get<Kitchen[]>(`${this.apiUrl}/kitchen`);
  }
}
