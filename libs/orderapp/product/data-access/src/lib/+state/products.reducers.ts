import {
  CategoryViseProducts,
  Product,
} from '@hotel/orderapp/shared/data-access';

import { createReducer, on } from '@ngrx/store';
import {
  addProductSuccess,
  addupdateProductInprogress,
  filterProducts,
  loadProductsFail,
  loadProductsLoading,
  loadProductsSuccess,
  updateProductBooleans,
} from './product.actions';
import { data } from './sampledata';
import { Prisma } from '@prisma/client';

export const PRODUCTS_FEATURE_KEY = 'products';

export interface ProductState {
  products: Product[];
  searchTerm: string;
  selectedProduct: Product | null;
  productFetchInprogress: boolean;
  productAddUpdateInProgress: boolean;
  errorMessage: string;
}

export const categoryvise: any = data;
const initialState: ProductState = {
  products: [],
  searchTerm: '',
  selectedProduct: null,
  productFetchInprogress: false,
  productAddUpdateInProgress: false,
  errorMessage: '',
};

export const productsReducer = createReducer(
  initialState,
  // on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsSuccess, (state, { products }) => {
    console.log('reducer is firing up');

    return {
      ...state,
      products,
      productFetchInprogress: false,
      productAddUpdateInProgress: false,
    };
  }),
  on(filterProducts, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  })),
  on(loadProductsLoading, (state) => ({
    ...state,
    productFetchInprogress: true,
  })),
  on(addupdateProductInprogress, (state) => {
    console.log('inside addupdateprogress reducer');
    return {
      ...state,
      productAddUpdateInProgress: true,
    };
  }),
  on(addProductSuccess, (state, { organisation }) => ({
    ...state,
    productAddUpdateInProgress: false,
    errorMessage: '',
  }))
);

// export const categoryviseProductsReducer = createReducer(
//   initialState,
//   on(loadProductsCategoryViceSuccess, (state, { productsByCat }) => ({
//     ...state,
//     productsByCat,
//   }))
// );
