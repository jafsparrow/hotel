import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardFeatureOrderReportComponent } from './orderapp-dashboard-feature-order-report.component';

describe('OrderappDashboardFeatureOrderReportComponent', () => {
  let component: OrderappDashboardFeatureOrderReportComponent;
  let fixture: ComponentFixture<OrderappDashboardFeatureOrderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardFeatureOrderReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappDashboardFeatureOrderReportComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
