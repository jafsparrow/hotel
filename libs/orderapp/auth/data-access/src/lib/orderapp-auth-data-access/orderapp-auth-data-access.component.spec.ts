import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappAuthDataAccessComponent } from './orderapp-auth-data-access.component';

describe('OrderappAuthDataAccessComponent', () => {
  let component: OrderappAuthDataAccessComponent;
  let fixture: ComponentFixture<OrderappAuthDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappAuthDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappAuthDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
