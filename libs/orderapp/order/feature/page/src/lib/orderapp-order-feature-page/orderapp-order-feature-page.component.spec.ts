import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeaturePageComponent } from './orderapp-order-feature-page.component';

describe('OrderappOrderFeaturePageComponent', () => {
  let component: OrderappOrderFeaturePageComponent;
  let fixture: ComponentFixture<OrderappOrderFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeaturePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappOrderFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
