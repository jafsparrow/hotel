import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappTaxDataAccessComponent } from './orderapp-tax-data-access.component';

describe('OrderappTaxDataAccessComponent', () => {
  let component: OrderappTaxDataAccessComponent;
  let fixture: ComponentFixture<OrderappTaxDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappTaxDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappTaxDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
