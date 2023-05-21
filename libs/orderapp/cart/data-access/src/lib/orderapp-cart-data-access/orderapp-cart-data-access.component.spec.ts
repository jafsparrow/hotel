import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCartDataAccessComponent } from './orderapp-cart-data-access.component';

describe('OrderappCartDataAccessComponent', () => {
  let component: OrderappCartDataAccessComponent;
  let fixture: ComponentFixture<OrderappCartDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCartDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCartDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
