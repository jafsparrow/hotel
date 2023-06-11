import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappKitchenDataAccessComponent } from './orderapp-kitchen-data-access.component';

describe('OrderappKitchenDataAccessComponent', () => {
  let component: OrderappKitchenDataAccessComponent;
  let fixture: ComponentFixture<OrderappKitchenDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappKitchenDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappKitchenDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
