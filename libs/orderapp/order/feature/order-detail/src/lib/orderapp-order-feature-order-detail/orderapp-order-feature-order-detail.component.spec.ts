import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeatureOrderDetailComponent } from './orderapp-order-feature-order-detail.component';

describe('OrderappOrderFeatureOrderDetailComponent', () => {
  let component: OrderappOrderFeatureOrderDetailComponent;
  let fixture: ComponentFixture<OrderappOrderFeatureOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeatureOrderDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappOrderFeatureOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
