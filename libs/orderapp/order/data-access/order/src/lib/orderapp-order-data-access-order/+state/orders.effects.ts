import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OrderSummary } from '@hotel/common/types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, interval, map, of, startWith, switchMap, tap } from 'rxjs';
import { OrderService } from '../orders.service';
import {
  loadOrderDetailSpinnerOn,
  loadOrderDetails,
  loadOrderDetailsFailure,
  loadOrderDetailsSuccess,
  loadRecentOrders,
  loadRecentOrdersFail,
  loadRecentOrdersSuccess,
  makeBillForOrder,
  makeBillForOrderFail,
  makeBillForOrderSuccess,
  orderPlaceFail,
  orderPlaceSuccess,
  payTheOrder,
  payTheOrderFail,
  payTheOrderSuccess,
  placeOrder,
  pollRecentOrders,
  updateOrderItemStatus,
  updateOrderItemStatusFail,
  updateOrderStatus,
  updateOrderStatusFail,
} from './orders.actions';

@Injectable()
export class OrderEffects {
  constructor(
    private orderService: OrderService,
    private action$: Actions,
    // private router: Router,
    private store: Store,
    // private _snackBar: MatSnackBar,
    private location: Location
  ) {}

  placeOrder$ = createEffect(() => {
    return this.action$.pipe(
      ofType(placeOrder),
      switchMap((order) => {
        return this.orderService.placeOrder(order.cart).pipe(
          map((order) =>
            orderPlaceSuccess({
              successMessage: `Order ${order.orderNumber} updated or created successfully`,
            })
          ),
          catchError((error) =>
            of(
              orderPlaceFail({
                errorMessage: 'Something went wrong, Please try again',
              })
            )
          )
        );
      })
    );
  });

  placeOrderSuccess$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(orderPlaceSuccess),
        tap((data: any) =>
          // this._snackBar.open('Your order is placed successfully', 'close')
          console.log(data)
        )
        // tap((data: any) => this.store.dispatch(clearCart()))

        // tap((data: any) => this.location.back())
      );
    },
    { dispatch: false }
  );

  loadRecentOrdersEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadRecentOrders),
      switchMap((data) =>
        this.orderService.getRecentOrders().pipe(
          map((res) =>
            loadRecentOrdersSuccess({ recentOrders: res as OrderSummary[] })
          ),
          catchError((error) =>
            of(
              loadRecentOrdersFail({
                errorMessage: 'Something happened while loading orders',
              })
            )
          )
        )
      )
    );
  });

  updateOrderStatusEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateOrderStatus),
      switchMap((data) =>
        this.orderService.updateOrderStatus(data.orderId, data.status).pipe(
          map((data) =>
            loadRecentOrdersSuccess({ recentOrders: data as OrderSummary[] })
          ),
          catchError((error) =>
            of(
              updateOrderStatusFail({
                errorMessage: 'somethign wrong happened while updating',
              })
            )
          )
        )
      )
    );
  });

  updateOrderItemStatusEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateOrderItemStatus),
      switchMap((data) =>
        this.orderService
          .updateOrderItemStatus(
            data.orderId,
            data.orderItemKey,
            data.orderItemStatus
          )
          .pipe(
            map((data) =>
              loadRecentOrdersSuccess({
                recentOrders: data as OrderSummary[],
              })
            ),
            catchError((error) =>
              of(
                updateOrderItemStatusFail({
                  errorMessage: 'somethign wrong happened while updating',
                })
              )
            )
          )
      )
    );
  });

  pollRecentOrdersEffect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(pollRecentOrders),
        switchMap((data) =>
          interval(5000).pipe(
            tap((data) => console.log('polling now')),
            tap((data) => this.store.dispatch(loadRecentOrders()))
          )
        )
      );
    },
    { dispatch: false }
  );

  getOrderDetailsEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadOrderDetails),
      tap((date) => loadOrderDetailSpinnerOn()),
      switchMap((data) =>
        this.orderService.getOrderDetail(data.orderId).pipe(
          map((data) => loadOrderDetailsSuccess({ order: data })),
          catchError((error) =>
            of(
              loadOrderDetailsFailure({
                errorMessage:
                  'Something wrong happened while fetching order details',
              })
            )
          )
        )
      )
    );
  });

  makeBillForOrderEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(makeBillForOrder),
      tap((data) => console.log('makeBillforoder effect fired')),
      switchMap((data) =>
        this.orderService.makeBillForOrder(data.orderId).pipe(
          map((res) => makeBillForOrderSuccess({ updatedOrder: res })),
          catchError((error) =>
            of(
              makeBillForOrderFail({
                errorMessage: 'Could not print bill something happpned.',
              })
            )
          )
        )
      )
    );
  });

  makeBillSuccessEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(makeBillForOrderSuccess),
      switchMap((data) =>
        of(loadOrderDetailsSuccess({ order: data.updatedOrder }))
      )
    );
  });

  makeBillSuccessEffect2$ = createEffect(() => {
    return this.action$.pipe(
      ofType(makeBillForOrderSuccess),
      switchMap((data) => of(loadRecentOrders()))
    );
  });
  payTheOrderEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(payTheOrder),
      tap((data) => console.log('Pay Order Effect fired')),
      switchMap((data) =>
        this.orderService.payTheOrder(data.orderId).pipe(
          map((res) => payTheOrderSuccess({ updatedOrder: res })),
          catchError((error) =>
            of(
              payTheOrderFail({
                errorMessage: 'Could not print bill something happpned.',
              })
            )
          )
        )
      )
    );
  });

  payOrderSuccessEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(payTheOrderSuccess),
      switchMap((data) =>
        of(loadOrderDetailsSuccess({ order: data.updatedOrder }))
      )
    );
  });

  payOrderSuccessEffect2$ = createEffect(() => {
    return this.action$.pipe(
      ofType(payTheOrderSuccess),
      switchMap((data) => of(loadRecentOrders()))
    );
  });
}
