import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderDataAccessOrderComponent } from './orderapp-order-data-access-order.component';

describe('OrderappOrderDataAccessOrderComponent', () => {
  let component: OrderappOrderDataAccessOrderComponent;
  let fixture: ComponentFixture<OrderappOrderDataAccessOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderDataAccessOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappOrderDataAccessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
