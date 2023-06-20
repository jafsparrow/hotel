import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappAuthFeatureSignupComponent } from './orderapp-auth-feature-signup.component';

describe('OrderappAuthFeatureSignupComponent', () => {
  let component: OrderappAuthFeatureSignupComponent;
  let fixture: ComponentFixture<OrderappAuthFeatureSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappAuthFeatureSignupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappAuthFeatureSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
