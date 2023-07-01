import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardFeatureStaffStatComponent } from './orderapp-dashboard-feature-staff-stat.component';

describe('OrderappDashboardFeatureStaffStatComponent', () => {
  let component: OrderappDashboardFeatureStaffStatComponent;
  let fixture: ComponentFixture<OrderappDashboardFeatureStaffStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardFeatureStaffStatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappDashboardFeatureStaffStatComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
