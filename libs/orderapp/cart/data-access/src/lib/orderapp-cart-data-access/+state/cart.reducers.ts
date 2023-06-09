import { Cart, Product } from '@hotel/common/types';
import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  clearCart,
  loadCartSuccess,
  loadTaxes,
  removeFromCart,
  setCartCreatedForUser,
  updateCart,
  deleteCartCreatedForUser,
} from './cart.actions';

export const CART_FEATURE_KEY = 'cart';

const initialState: Cart = {
  cartCreatedFor: null,
  createdAt: new Date(),
  cartItems: {},
  taxes: [
    {
      isPercentage: true,
      name: 'VAT',
      printName: 'VAT',
      value: 5,
    },
  ],
  placeOrderSpinner: false,
  tableId: 1,
  customerId: 0,
  existingOrderId: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state, { cart }) => ({ ...state, cart })),
  on(addToCart, (state, { item, key }) => {
    let generatedId = '';
    const newCartItem = { ...item };
    if (!key) {
      let tempKey = '';
      newCartItem.modifiers?.forEach(
        (modifier) => (tempKey = tempKey + modifier.id?.toString())
      );
      generatedId = `${item.product.id}${key}`;
    } else {
      generatedId = key;
    }

    const cartItems = { ...state.cartItems };
    cartItems[generatedId] = {
      ...(cartItems[generatedId] || {}),
      ...{
        ...newCartItem,
        count: cartItems[generatedId]
          ? cartItems[generatedId].count + newCartItem.count
          : newCartItem.count,
      },
    };

    console.log(cartItems);

    return {
      ...state,
      cartItems,
    };
  }),
  on(updateCart, (state, { item }) => {
    const totalcartItems = JSON.parse(JSON.stringify(state.cartItems));

    if (state.cartItems[item.product.id]) {
      if (state.cartItems[item.product.id].count == 1) {
        delete totalcartItems[item.product.id];
      } else {
        console.log(totalcartItems[item.product.id]);
        totalcartItems[item.product.id].count =
          totalcartItems[item.product.id].count - item.count;
      }
    }

    return {
      ...state,
      cartItems: totalcartItems,
    };
  }),
  on(removeFromCart, (state, { itemId }) => {
    const totalcartItems = JSON.parse(JSON.stringify(state.cartItems));
    delete totalcartItems[itemId];
    return {
      ...state,
      cartItems: totalcartItems,
    };
  }),
  on(clearCart, (state) => ({
    ...state,
    cartItems: {},
    cartCreatedFor: null,
    tableId: 0,
    existingOrderId: 0,
    customerId: 0,
  })),
  on(loadTaxes, (state, { taxes }) => {
    // console.log('inside reducer tax is ', taxes);
    return { ...state, taxes };
  }),
  on(
    setCartCreatedForUser,
    (state, { user, tableId, customerId, existingOrderId }) => ({
      ...state,
      cartCreatedFor: user,
      tableId: tableId,
      customerId: customerId ? customerId : 0,
      existingOrderId: existingOrderId ? existingOrderId : 0,
    })
  ),
  on(deleteCartCreatedForUser, (state) => ({ ...state, cartCreatedFor: null }))
);
// state.cartItems[productId] = {
//   ...(state.cartItems[productId] || []),
//   ...item,
// };

// categoryVice[item.category] = [
//   ...(categoryVice[item.category] || []),
//   item,
// ];

// var mapcartItems = state.cartItems.map((item) => item);
// var existingElementIndex = mapcartItems.findIndex(
//   (cartel) => cartel.product.id == item.product.id
// );

// console.log('index', existingElementIndex);
// if (existingElementIndex == -1) {
//   console.log('elelemnt is new');
//   return { ...state, cartItems: [...state.cartItems, item] };
// }
// var newCount = mapcartItems[existingElementIndex].count + item.count;
// mapcartItems[existingElementIndex] = {
//   ...mapcartItems[existingElementIndex],
//   count: newCount,
// };
// return { ...state, cartItems: mapcartItems };

// export const cartReducer = createReducer(
//   initialState,
//   on(loadCartSuccess, (state, { cart }) => ({ ...state, cart })),
//   on(addToCart, (state, { item }) => {
//     var mapcartItems = state.cartItems.map((item) => item);
//     var existingElementIndex = mapcartItems.findIndex(
//       (cartel) => cartel.product.id == item.product.id
//     );

//     console.log('index', existingElementIndex);
//     if (existingElementIndex == -1) {
//       console.log('elelemnt is new');
//       return { ...state, cartItems: [...state.cartItems, item] };
//     }
//     var newCount = mapcartItems[existingElementIndex].count + item.count;
//     mapcartItems[existingElementIndex] = {
//       ...mapcartItems[existingElementIndex],
//       count: newCount,
//     };
//     return { ...state, cartItems: mapcartItems };
//   })

// return {
//   ...state,
//   ...{
//     ...state.cartItems,
//     ...{
//       ...(state.cartItems[productId] || {}),
//       ...item,
//     },
//   },
// };
