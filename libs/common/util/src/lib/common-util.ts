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

// export const timesAgoFormat = (dateTime: Date) => DateTime.fromJSDate(dateTime).
