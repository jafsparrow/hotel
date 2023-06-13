import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of, tap } from 'rxjs';
import { CategoryService } from '../category.service';
import {
  addCategory,
  addCategoryFail,
  addCategorySuccess,
  loadCategories,
  loadCategoriesSuccess,
  loadCategoryFail,
} from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService // private dialog: MatDialog,
  ) // private _snackBar: MatSnackBar
  {}

  loadCategoryEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories),
      switchMap(() => {
        return this.categoryService.getCategories().pipe(
          map((data) => loadCategoriesSuccess({ categories: data })),
          catchError((error) =>
            of(loadCategoryFail({ errorMessage: 'category loading failed' }))
          )
        );
      })
    );
  });

  // addCategoryEffect$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(addCategory),
  //     switchMap((payload) =>
  //       this.categoryService
  //         .addCategory(payload.category)
  //         .pipe(
  //           catchError((error) =>
  //             of(addCategoryFail({ errorMessage: 'Could not create category' }))
  //           )
  //         )
  //     )
  //   );
  // });

  // addCategorySuccessEffect$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(addCategorySuccess),
  //     tap((data) => this.dialog.closeAll()),
  //     tap((data: any) =>
  //       this._snackBar.open('A new category is added', 'close')
  //     ),
  //     switchMap((payload) =>
  //       of(loadOrgInfoSuccess({ organisation: payload.organisation }))
  //     )
  //   );
  // });
}
