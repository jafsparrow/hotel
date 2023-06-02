import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCartFeatureCartSummaryButtonComponent } from './orderapp-cart-feature-cart-summary-button.component';

describe('OrderappCartFeatureCartSummaryButtonComponent', () => {
  let component: OrderappCartFeatureCartSummaryButtonComponent;
  let fixture: ComponentFixture<OrderappCartFeatureCartSummaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCartFeatureCartSummaryButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappCartFeatureCartSummaryButtonComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
