import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map, of, tap } from 'rxjs';
import { CategoryService } from '../category.service';
import {
  addCategory,
  addCategoryFail,
  addCategorySuccess,
  editCategory,
  editCategorySuccess,
  loadCategories,
  loadCategoriesSuccess,
  loadCategoryFail,
} from './category.actions';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private categoryService: CategoryService // private dialog: MatDialog, // private _snackBar: MatSnackBar
  ) {}

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

  addCategoryEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategory),
      switchMap((payload) =>
        this.categoryService.createCategory(payload.category).pipe(
          map((data) => addCategorySuccess({ category: data })),
          catchError((error) =>
            of(addCategoryFail({ errorMessage: 'Could not create category' }))
          )
        )
      )
    );
  });

  addCategorySuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategorySuccess),
      tap((data) => this.dialog.closeAll()),
      switchMap((payload) => of(loadCategories()))
    );
  });

  editCategoryEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editCategory),
      switchMap((payload) =>
        this.categoryService
          .updateCategory(payload.categoryId, payload.category)
          .pipe(
            map((data) => editCategorySuccess({ category: data })),
            catchError((error) =>
              of(addCategoryFail({ errorMessage: 'Could not create category' }))
            )
          )
      )
    );
  });

  editCategorySuccessEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editCategorySuccess),
      tap((data) => this.dialog.closeAll()),
      switchMap((payload) => of(loadCategories()))
    );
  });

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
