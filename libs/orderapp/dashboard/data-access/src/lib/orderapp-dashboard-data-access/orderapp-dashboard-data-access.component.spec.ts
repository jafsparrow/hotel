import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappDashboardDataAccessComponent } from './orderapp-dashboard-data-access.component';

describe('OrderappDashboardDataAccessComponent', () => {
  let component: OrderappDashboardDataAccessComponent;
  let fixture: ComponentFixture<OrderappDashboardDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappDashboardDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappDashboardDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
