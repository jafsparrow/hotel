import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order, ORDER_FEATURE_KEY } from './orders.reducers';
import { OrderItem, OrderItemStatus, OrderSummary } from '@hotel/common/types';
import { selectCompanyTaxes } from '@hotel/orderapp/company/data-access';
import {
  aggregateOrderItems,
  getAppliedTaxesAndTaxesTotal,
} from '@hotel/common/util';

export const selectOrderState = createFeatureSelector<Order>(ORDER_FEATURE_KEY);

export const selectRecentOrders = createSelector(
  selectOrderState,
  (state: Order) => state.recentOrders
);

export const selectPlaceOrderSpinner = createSelector(
  selectOrderState,
  (state: Order) => state.placeOrderSpinner
);
export const selectOrderSuccessMessage = createSelector(
  selectOrderState,
  (state: Order) => state.successMessage
);

export const selectOrderErrorMessage = createSelector(
  selectOrderState,
  (state: Order) => state.errorMessage
);

export const selectOrderItemsFromRecentOrders = createSelector(
  selectRecentOrders,
  (orders) => {
    console.log('orders', orders);
    const orderItemArray: OrderItem[] = orders
      .map((order) =>
        order.orderItems!.map((item) => ({
          ...item,
          orderId: order.id?.toString(),
          orderNumber: order.orderNumber,
        }))
      )
      .reduce((prevVal, item) => [...prevVal, ...item], [])
      .filter((item) => item.status != OrderItemStatus.READY);

    const categoryVice: any = {};

    orderItemArray
      .filter((item) => item.status == OrderItemStatus.WAITING)
      .forEach(
        (item) =>
          (categoryVice[item.key!] =
            categoryVice[item.key!] + item.count || item.count)
      );

    console.log(orderItemArray);
    const final = orderItemArray.map((item) => {
      item['totalCountOfSameItem'] = 0;
      if (categoryVice[item.key!]) {
        return { ...item, totalCountOfSameItem: categoryVice[item.key!] };
      }
      return item;
    });

    console.log('final', final);
    return final;
  }
);

export const selectUserFilteredCategories = createSelector(
  selectOrderState,
  (state) => state.userSelectedFilterCategories
);

export const selectFilteredOrderItemsFromRecentOrders = createSelector(
  selectUserFilteredCategories,
  selectOrderItemsFromRecentOrders,
  (filteredCategories, orderLineItems) => {
    return orderLineItems.filter((item) =>
      filteredCategories.length ? filteredCategories.indexOf('') !== -1 : true
    );
  }
);

export const selectLoadOrderDetailSpinner = createSelector(
  selectOrderState,
  (state) => state.loadOrderDetailSpinner
);

export const selectOrderDetailsOfSelectedOrder = createSelector(
  selectOrderState,
  selectCompanyTaxes,
  (state, companyTaxes) => {
    const order = state.selectedOrderDetails;
    console.log('company taxes', companyTaxes);
    if (order) {
      const { taxesApplied, taxedTotal } = getAppliedTaxesAndTaxesTotal(
        order.totalAmount!,
        companyTaxes!
      );

      return {
        ...order,
        appliedTaxes: taxesApplied,
        taxedTotal,
      };
    }
    return order;
  }
);

export const selectOrderDetailEdited = createSelector(
  selectOrderState,
  selectCompanyTaxes,
  (state, companyTaxes) => {
    // const orderItemEdits = state.orderItemEdits;
    const selectedOrder = state.selectedOrderDetails;

    const orderItemEdits = Object.values(state.orderItemEditObject).map(
      (item) => {
        const orderItem = item.orderItem;
        return { ...orderItem, count: item.count };
      }
    );

    if (!selectedOrder) return;
    const { aggregated, totalAmount, totalQuantityCount, totalItemsCount } =
      aggregateOrderItems([...selectedOrder.orderItems!, ...orderItemEdits]);

    const newCopiedOrder: OrderSummary = {
      ...selectedOrder,
      orderItems: aggregated,
      totalAmount,
      totalQuantityCount,
      totalItemsCount,
      appliedTaxes: [],
    };

    const { taxesApplied, taxedTotal } = getAppliedTaxesAndTaxesTotal(
      newCopiedOrder.totalAmount!,
      companyTaxes!
    );

    return {
      ...newCopiedOrder,
      appliedTaxes: taxesApplied,
      taxedTotal,
    };
  }
);

export const selectMakeBillSpinner = createSelector(
  selectOrderState,
  (state) => state.makeBillForOrderSpinner
);

export const selectMakeBillMessages = createSelector(
  selectOrderState,

  (state) => ({
    successMessage: state.successMessage,
    failedMessage: state.errorMessage,
  })
);

export const selectPayTheOrderSpinner = createSelector(
  selectOrderState,
  (state) => state.payTheOrderSpinner
);
