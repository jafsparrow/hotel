import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Category } from '@hotel/orderapp/shared/data-access';

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

  // addCategory(categoryData: Category) {
  //   let updateCategory = { ...categoryData };

  //   const url = `${this.apiUrl}/category`;

  //   return this.http.post<Organisation>(url, updateCategory);
  // }
}
