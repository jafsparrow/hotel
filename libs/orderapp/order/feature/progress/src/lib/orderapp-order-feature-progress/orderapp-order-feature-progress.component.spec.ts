import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeatureProgressComponent } from './orderapp-order-feature-progress.component';

describe('OrderappOrderFeatureProgressComponent', () => {
  let component: OrderappOrderFeatureProgressComponent;
  let fixture: ComponentFixture<OrderappOrderFeatureProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeatureProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappOrderFeatureProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
