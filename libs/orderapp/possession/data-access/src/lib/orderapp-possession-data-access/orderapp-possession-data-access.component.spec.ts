import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappPossessionDataAccessComponent } from './orderapp-possession-data-access.component';

describe('OrderappPossessionDataAccessComponent', () => {
  let component: OrderappPossessionDataAccessComponent;
  let fixture: ComponentFixture<OrderappPossessionDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappPossessionDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappPossessionDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
