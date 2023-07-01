import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardFeaturePageComponent } from './orderapp-dashboard-feature-page.component';

describe('OrderappDashboardFeaturePageComponent', () => {
  let component: OrderappDashboardFeaturePageComponent;
  let fixture: ComponentFixture<OrderappDashboardFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardFeaturePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappDashboardFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
