import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductDataAccessComponent } from './orderapp-product-data-access.component';

describe('OrderappProductDataAccessComponent', () => {
  let component: OrderappProductDataAccessComponent;
  let fixture: ComponentFixture<OrderappProductDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappProductDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
