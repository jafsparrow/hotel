import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { KitchenService } from '../kitchen.service';

import {
  addKitchen,
  addKitchenFailed,
  addKitchenSuccess,
  loadKitchenSuccess,
  loadKitchens,
  loadKitchensFailed,
  updateKitchen,
  updateKitchenFailed,
  updateKitchenSuccess,
} from './kitchen.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class KitchenEffects {
  constructor(
    private kitchenService: KitchenService,
    private actions$: Actions
  ) {}

  loadKitchenEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadKitchens),
      switchMap((data) =>
        this.kitchenService.loadKitchens().pipe(
          map((data) => loadKitchenSuccess({ kitchens: data })),
          catchError((error) =>
            of(loadKitchensFailed({ errorMessage: 'Failed to load kitchens' }))
          )
        )
      )
    );
  });

  addKitchenEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addKitchen),
      switchMap((data) =>
        this.kitchenService.createKitchen(data.kitchen).pipe(
          map((data) => addKitchenSuccess({ kitchen: data })),
          map((data) => loadKitchens()),
          catchError((error) =>
            of(addKitchenFailed({ errorMessage: 'Failed to add kitchens' }))
          )
        )
      )
    );
  });

  editKitchenEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateKitchen),
      switchMap((data) =>
        this.kitchenService.updateKitchen(data.kitchen).pipe(
          map((data) => updateKitchenSuccess({ kitchen: data })),
          catchError((error) =>
            of(
              updateKitchenFailed({ errorMessage: 'Failed to update kitchens' })
            )
          )
        )
      )
    );
  });
}
