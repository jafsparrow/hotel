import { Cart, OrderStatus, Tax } from '@hotel/common/types';
import { selectRecentOrders } from '@hotel/orderapp/order/data-access/order';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { CART_FEATURE_KEY } from './cart.reducers';

export const selectCartState = createFeatureSelector<Cart>(CART_FEATURE_KEY);

export const selectCart = createSelector(selectCartState, (state) => {
  return {
    ...state,
    total: Object.values(state.cartItems).reduce((tot, cartItem) => {
      return (
        tot +
        (cartItem.product.price +
          cartItem.modifiers!.reduce(
            (prev, curr) => prev + parseInt(curr?.price.toString()),
            0
          )) *
          cartItem.count
      );
    }, 0),
  };
});

export const selectCartTaxed = createSelector(selectCart, (state) => {
  return {
    ...state,
    taxesApplied: state.taxes?.map((tax) => {
      return {
        name: tax.printName,
        taxValue: getTaxedSubTotal(state.total, tax),
      };
    }),
    taxedTotal: state.taxes
      ?.reduce((a, b) => a + getTaxedSubTotal(state.total, b), state.total)
      .toFixed(2),
  };
});

export const selectNumberOfItemsInCart = createSelector(
  selectCartState,
  (state) => Object.keys(state.cartItems)?.length
);

export const selectCartTotal = createSelector(selectCartState, (state) => {
  const total = getTotalCartAmout(state);
  // console.log('total is ', total);
  return total;
});

export const selectInCartProductCount = createSelector(
  selectCart,
  (state: Cart, props: any) => {
    const idOfProduct = props.id;

    let count = 0;
    Object.keys(state.cartItems).forEach((key) => {
      if (key.toString().includes(idOfProduct)) {
        count = count + state.cartItems[key].count;
      }
    });
    return count;
  }
);

export const selectCartCountOfProduct = (productId: string) =>
  createSelector(selectCart, (state: Cart) => {
    const idOfProduct = productId;

    let count = 0;
    Object.keys(state.cartItems).forEach((key) => {
      if (key.toString().includes(idOfProduct)) {
        count = count + state.cartItems[key].count;
      }
    });
    return count;
  });

export const getTotalCartAmout = (state: Cart): string => {
  const getTotal = +Object.values(state.cartItems)
    .reduce((tot, cartItem) => tot + cartItem.product.price * cartItem.count, 0)
    .toFixed(3);
  // console.log('gettotla', getTotal.toFixed(3));
  const totalString = getTotal.toFixed(3).toString();
  return totalString; //getTotal.toFixed().toString();
};

export const getTaxedSubTotal = (total: number, tax: Tax): number => {
  let multiplyValue = 1;
  if (tax.isPercentage) multiplyValue = 0.01;

  return parseFloat((total * multiplyValue * tax.value).toFixed(2));
};

export const selectCartCreatedForUser = createSelector(
  selectCartState,
  (state) => state.cartCreatedFor
);

//[TODO] - investigate if its okay to user other data access module selectors inside here (ie; selectRecentOrders)
// checkout anyother way like passing parameters to get order out of order data access module without having to
// subscripbe to selectors on component .ts file.
export const selectNotPaidOrderOfCreatedForUser = createSelector(
  selectRecentOrders,
  selectCartCreatedForUser,
  (orders, createForUser) => {
    console.log('from cart selectors', orders);
    return orders
      .filter((order) => order.orderStatus !== OrderStatus.PAID)
      .filter(
        (order) => order.createdFor?.firstName == createForUser?.firstName
      );
  }
);
