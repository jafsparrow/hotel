import { state } from '@angular/animations';
import {
  CartItem,
  CategoryViseProducts,
  Product,
} from '@hotel/orderapp/shared/data-access';
// import { selectCart } from '@jafar-tech/table-qr-cart-data-access';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { ProductState, PRODUCTS_FEATURE_KEY } from './products.reducers';

export const selectProductState =
  createFeatureSelector<ProductState>(PRODUCTS_FEATURE_KEY);

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

// export const selectProductsFromCategory = (category: string) =>
//   createSelector(selectAllProducts, (products) => {
//     const currCatPor = products.filter(
//       (product) => product.category == category
//     );

//     const sorted = currCatPor.sort(
//       (a, b) => a.indexInCategory! - b.indexInCategory!
//     );
//     // console.log(sorted);
//     return sorted;
//   });
// export const selectProductsCategoryVice = createSelector(
//   selectProductState,
//   (state) => state.products
// );

// export const selectProductsArray = createSelector(
//   selectProductsCategoryVice,
//   (categoryViceProduct) => {
//     let productArray: Product[] = [];
//     Object.values(categoryViceProduct).forEach(
//       (subProductArray) =>
//         (productArray = [...productArray, ...subProductArray])
//     );
//     return productArray;
//   }
// );

export interface ProdCue extends Product {
  count?: number;
}

// export const selectProductConsideringcart = createSelector(
//   selectProductsCategoryVice,
//   // selectCart,
//   (categoryviceProducts, cart) => {
//     return [];
//   }
// );

// export const selectProductByCategories = createSelector(
//   selectProductState,
//   (state) => {
//     const categoryVice: CategoryViseProducts = {};
//     state.products.map((item) => {
//       categoryVice[item.category] = [
//         ...(categoryVice[item.category] || []),
//         item,
//       ];
//     });

//     Object.keys(categoryVice).forEach((key) => {
//       categoryVice[key] = categoryVice[key].sort(
//         (prev, curr) => prev.indexInCategory! - curr.indexInCategory!
//       );
//     });

//     return categoryVice;
//   }
// );

// export const selectQuickDisplayProducts = createSelector(
//   selectProductsCategoryVice,
//   (state) => {
//     const productsAsArray: Product[] = [];
//     return productsAsArray;
//     Object.values(state).forEach(
//       (products) => (productsAsArray = [...productsAsArray, ...products])
//     );
//     return productsAsArray.filter((product) => product.quickDisplayOrder);
//   }
// );

export const selectProductFetchInProgressFlag = createSelector(
  selectProductState,
  (state) => state.productFetchInprogress
);

export const selectAddUpdateProductProgressFlag = createSelector(
  selectProductState,
  (state) => state.productAddUpdateInProgress
);

// export const selectProductByCategories = createSelector(
//   selectAllProducts,
//   (products) => {
//     return products.reduce((acc, item) => {
//       acc[item.type] = [...(acc[item.type] || []), item];
//       return acc;
//     }, <{ [key: string]: any }>{});
//   }
// );

// export const selectProduct = createSelector(selectAllProducts, (state) => {
//   return state.filter( )
// });