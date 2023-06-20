import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappAuthFeatureSigninComponent } from './orderapp-auth-feature-signin.component';

describe('OrderappAuthFeatureSigninComponent', () => {
  let component: OrderappAuthFeatureSigninComponent;
  let fixture: ComponentFixture<OrderappAuthFeatureSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappAuthFeatureSigninComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappAuthFeatureSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
