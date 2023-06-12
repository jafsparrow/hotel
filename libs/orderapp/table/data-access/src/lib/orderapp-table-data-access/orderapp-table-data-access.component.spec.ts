import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappTableDataAccessComponent } from './orderapp-table-data-access.component';

describe('OrderappTableDataAccessComponent', () => {
  let component: OrderappTableDataAccessComponent;
  let fixture: ComponentFixture<OrderappTableDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappTableDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappTableDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
