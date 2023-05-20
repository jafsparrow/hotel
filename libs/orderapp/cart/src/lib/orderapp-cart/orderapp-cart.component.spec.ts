import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCartComponent } from './orderapp-cart.component';

describe('OrderappCartComponent', () => {
  let component: OrderappCartComponent;
  let fixture: ComponentFixture<OrderappCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
