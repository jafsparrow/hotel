import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardFeatureProductReportComponent } from './orderapp-dashboard-feature-product-report.component';

describe('OrderappDashboardFeatureProductReportComponent', () => {
  let component: OrderappDashboardFeatureProductReportComponent;
  let fixture: ComponentFixture<OrderappDashboardFeatureProductReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardFeatureProductReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappDashboardFeatureProductReportComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
