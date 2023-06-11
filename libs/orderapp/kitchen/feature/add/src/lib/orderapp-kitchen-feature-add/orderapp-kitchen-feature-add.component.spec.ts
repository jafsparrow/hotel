import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappKitchenFeatureAddComponent } from './orderapp-kitchen-feature-add.component';

describe('OrderappKitchenFeatureAddComponent', () => {
  let component: OrderappKitchenFeatureAddComponent;
  let fixture: ComponentFixture<OrderappKitchenFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappKitchenFeatureAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappKitchenFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
