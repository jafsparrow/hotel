import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureSearchComponent } from './orderapp-product-feature-search.component';

describe('OrderappProductFeatureSearchComponent', () => {
  let component: OrderappProductFeatureSearchComponent;
  let fixture: ComponentFixture<OrderappProductFeatureSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappProductFeatureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
