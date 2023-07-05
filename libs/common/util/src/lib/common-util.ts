import { AppliedTaxInfo, Cart, OrderItem, Tax } from '@hotel/common/types';

import { DateTime } from 'luxon';

export function commonUtil(): string {
  return 'common-util';
}

export const getOrderItemsTotal = (orderItems: OrderItem[]): number => {
  const totalOfOderItems = +Object.values(orderItems).reduce(
    (tot, orderItem) => {
      return tot + orderItem.amount!;
    },
    0
  );
  return +totalOfOderItems.toFixed(3);
};

export const getAppliedTaxesAndTaxesTotal = (
  total: number,
  taxes: Tax[]
): {
  taxesApplied: AppliedTaxInfo[];
  taxedTotal: number;
} => {
  const taxAppliedInfo = {
    taxesApplied: taxes?.map((tax) => {
      return {
        taxName: tax.printName,
        value: getTaxedSubTotal(total, tax),
      };
    }),
    taxedTotal: +taxes
      ?.reduce((a, b) => a + getTaxedSubTotal(total, b), total)
      .toFixed(3),
  };
  return taxAppliedInfo;
};

export const getTaxedSubTotal = (total: number, tax: Tax): number => {
  let multiplyValue = 1;
  if (tax.isPercentage) multiplyValue = 0.01;

  return +(total * multiplyValue * tax.value).toFixed(3);
};

export const dateTimeToDateHHMM = (dateTime: Date) =>
  DateTime.fromJSDate(dateTime).toLocaleString(DateTime.DATETIME_SHORT);

export const dateTimeNowMinus = (hoursToSubtract: number): Date => {
  return DateTime.now().minus({ hour: hoursToSubtract }).toJSDate();
};

export const timesAgoFormat = (datetime: string) =>
  DateTime.fromISO(datetime).toRelative();

export const getStartOfTheDay = () => DateTime.now().startOf('day').toJSDate();
export const getStartOfTheWeek = () =>
  DateTime.now().startOf('week').toJSDate();
export const getStartOfTheMonth = () =>
  DateTime.now().startOf('month').toJSDate();

export const aggregateOrderItems = (orderItems: OrderItem[]) => {
  let totalQuantityCount = 0;
  let totalItemsCount = 0;
  let totalAmount = 0;
  const itemObj: Record<string, OrderItem> = {};
  orderItems.forEach((orderItem) => {
    const key = orderItem.customeKey!;
    itemObj[key] = {
      ...(itemObj[key] || {}),
      ...{
        ...orderItem,
        count: itemObj[key]
          ? itemObj[key].count + orderItem.count
          : orderItem.count,
      },
    };
  });
  const aggregatedOrderItemsArr = Object.values(itemObj);
  Object.values(itemObj).forEach((item) => {
    totalQuantityCount = totalQuantityCount + item.count;
    totalItemsCount = totalItemsCount + 1;
    totalAmount = totalAmount + item.count * item.amount!;
  });

  return {
    aggregated: aggregatedOrderItemsArr,
    totalAmount,
    totalQuantityCount,
    totalItemsCount,
  };
};
