import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeatureOrderDetailEditComponent } from './orderapp-order-feature-order-detail-edit.component';

describe('OrderappOrderFeatureOrderDetailEditComponent', () => {
  let component: OrderappOrderFeatureOrderDetailEditComponent;
  let fixture: ComponentFixture<OrderappOrderFeatureOrderDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeatureOrderDetailEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappOrderFeatureOrderDetailEditComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
