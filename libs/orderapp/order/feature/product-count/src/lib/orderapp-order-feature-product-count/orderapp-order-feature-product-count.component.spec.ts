import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeatureProductCountComponent } from './orderapp-order-feature-product-count.component';

describe('OrderappOrderFeatureProductCountComponent', () => {
  let component: OrderappOrderFeatureProductCountComponent;
  let fixture: ComponentFixture<OrderappOrderFeatureProductCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeatureProductCountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappOrderFeatureProductCountComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
