import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardFeatureProductStatComponent } from './orderapp-dashboard-feature-product-stat.component';

describe('OrderappDashboardFeatureProductStatComponent', () => {
  let component: OrderappDashboardFeatureProductStatComponent;
  let fixture: ComponentFixture<OrderappDashboardFeatureProductStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardFeatureProductStatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappDashboardFeatureProductStatComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
