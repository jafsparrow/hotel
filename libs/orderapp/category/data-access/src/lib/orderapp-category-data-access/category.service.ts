import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Category } from '@hotel/common/types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private http: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  getCategories() {
    console.log('load category front end');
    return this.http.get<Category[]>(`${this.apiUrl}/category`);
  }

  createCategory(data: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/category`, data);
  }

  updateCategory(categoryId: number, data: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.apiUrl}/category/${categoryId}`,
      data
    );
  }

  // addCategory(categoryData: Category) {
  //   let updateCategory = { ...categoryData };

  //   const url = `${this.apiUrl}/category`;

  //   return this.http.post<Organisation>(url, updateCategory);
  // }
}
