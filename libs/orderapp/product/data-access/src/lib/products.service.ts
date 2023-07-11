import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import {
  Organisation,
  Product,
  ProductBoolFieldUpdateData,
  ProductSortData,
} from '@hotel/common/types';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  loadProducts(): Observable<Product[]> {
    console.log('am i getting somethigns');
    return this.httpClient.get<Product[]>(`${this.apiUrl}/product/list`);
  }

  // loadProductsCategoryVice(): Observable<{ [Key: string]: Product[] }> {
  //   console.log('am i getting somethigns');
  //   return this.httpClient.get<{ [Key: string]: Product[] }>(
  //     `${this.apiUrl}/product/list`
  //   );
  // }

  addProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.httpClient.post<Product>(`${this.apiUrl}/product`, product);
  }

  // updateProductsSort(
  //   companyId: string,
  //   productSoftData: ProductSortData[]
  // ): Observable<Organisation> {
  //   return this.httpClient.patch<Organisation>(
  //     `${this.apiUrl}/products/${companyId}`,
  //     productSoftData
  //   );
  // }

  // updateProductBoolean(
  //   companyId: string,
  //   data: ProductBoolFieldUpdateData
  // ): Observable<Organisation> {
  //   return this.httpClient.put<Organisation>(
  //     `${this.apiUrl}/products/${companyId}`,
  //     data
  //   );
  // }

  updateProduct(productId: string, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.apiUrl}/products/${productId}`,
      product
    );
  }
}

// PRODUCTS: Product[] = [
//   {
//     id: '1234',
//     name: 'Mocktail green apple',
//     price: 33,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'juice',
//     isActive: true,
//   },
//   {
//     id: '1235',
//     name: 'Showarma Plate',
//     price: 55,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'showarma',
//     isActive: true,
//   },
//   {
//     id: '1236',
//     name: 'Broated Chicken',
//     price: 66,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'broasted',
//     isActive: true,
//   },
//   {
//     id: '1237',
//     name: 'Apple Juice',
//     price: 33,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'juice',
//     isActive: true,
//   },
// ];
