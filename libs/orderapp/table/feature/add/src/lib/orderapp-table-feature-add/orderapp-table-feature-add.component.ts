import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  addTable,
  selectFloors,
  selectTableAddIndicator,
  updateTable,
} from '@hotel/orderapp/table/data-access';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Table, TableEditDialogData } from '@hotel/common/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hotel-orderapp-table-feature-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './orderapp-table-feature-add.component.html',
  styleUrls: ['./orderapp-table-feature-add.component.css'],
})
export class OrderappTableFeatureAddComponent implements OnInit {
  selectFloors$ = this.store.select(selectFloors);
  selectTableAddIndicator$ = this.store.select(selectTableAddIndicator);
  tableAddForm: FormGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    capacity: new FormControl('', { validators: [Validators.required] }),
    floorId: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: TableEditDialogData,

    public dialogRef: MatDialogRef<OrderappTableFeatureAddComponent>
  ) {}

  ngOnInit(): void {
    const tableToEdit = this.data?.table;
    console.log('kitchen t edit', tableToEdit);
    if (tableToEdit) {
      this.tableAddForm.patchValue(tableToEdit);
    }
  }

  addTable() {
    if (!this.tableAddForm.valid) return;

    if (this.data && this.data.table) {
      this.store.dispatch(
        updateTable({
          tabledId: this.data.table.id!,
          table: this.tableAddForm.value,
        })
      );
    } else {
      const table: Table = {
        ...this.tableAddForm.value,
      };

      this.store.dispatch(addTable({ table }));
    }
  }
}
