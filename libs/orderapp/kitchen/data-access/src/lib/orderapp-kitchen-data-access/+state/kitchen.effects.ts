import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { KitchenService } from '../kitchen.service';
import {
  loadKitchenSuccess,
  loadKitchens,
  loadKitchensFailed,
} from './kitchen.actions';
import { catchError, map, of, switchMap } from 'rxjs';

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

  //   addKitchenEffect$ = createEffect(() => {
  //     return this.actions$.pipe(
  //       ofType(addki),
  //       switchMap((data) =>
  //         this.kitchenService.loadKitchens().pipe(
  //           map((data) => loadKitchenSuccess({ kitchens: data })),
  //           catchError((error) =>
  //             of(loadKitchensFailed({ errorMessage: 'Failed to load kitchens' }))
  //           )
  //         )
  //       )
  //     );
  //   });
}
