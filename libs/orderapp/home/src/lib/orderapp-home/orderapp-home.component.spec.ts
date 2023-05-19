import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappHomeComponent } from './orderapp-home.component';

describe('OrderappHomeComponent', () => {
  let component: OrderappHomeComponent;
  let fixture: ComponentFixture<OrderappHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
