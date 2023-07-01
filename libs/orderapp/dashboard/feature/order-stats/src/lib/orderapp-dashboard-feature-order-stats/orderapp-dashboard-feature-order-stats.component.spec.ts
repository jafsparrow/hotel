import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardFeatureOrderStatsComponent } from './orderapp-dashboard-feature-order-stats.component';

describe('OrderappDashboardFeatureOrderStatsComponent', () => {
  let component: OrderappDashboardFeatureOrderStatsComponent;
  let fixture: ComponentFixture<OrderappDashboardFeatureOrderStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardFeatureOrderStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappDashboardFeatureOrderStatsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
