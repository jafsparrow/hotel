import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureAddComponent } from './orderapp-product-feature-add.component';

describe('OrderappProductFeatureAddComponent', () => {
  let component: OrderappProductFeatureAddComponent;
  let fixture: ComponentFixture<OrderappProductFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappProductFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
