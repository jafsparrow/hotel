import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappKitchenFeatureListComponent } from './orderapp-kitchen-feature-list.component';

describe('OrderappKitchenFeatureListComponent', () => {
  let component: OrderappKitchenFeatureListComponent;
  let fixture: ComponentFixture<OrderappKitchenFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappKitchenFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappKitchenFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
