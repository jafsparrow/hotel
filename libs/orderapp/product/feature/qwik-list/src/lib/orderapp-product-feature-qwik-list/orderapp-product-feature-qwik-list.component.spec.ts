import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureQwikListComponent } from './orderapp-product-feature-qwik-list.component';

describe('OrderappProductFeatureQwikListComponent', () => {
  let component: OrderappProductFeatureQwikListComponent;
  let fixture: ComponentFixture<OrderappProductFeatureQwikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureQwikListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappProductFeatureQwikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
