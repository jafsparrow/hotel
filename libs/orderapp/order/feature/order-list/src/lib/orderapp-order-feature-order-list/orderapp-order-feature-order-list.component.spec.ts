import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeatureOrderListComponent } from './orderapp-order-feature-order-list.component';

describe('OrderappOrderFeatureOrderListComponent', () => {
  let component: OrderappOrderFeatureOrderListComponent;
  let fixture: ComponentFixture<OrderappOrderFeatureOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeatureOrderListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappOrderFeatureOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
