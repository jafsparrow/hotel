import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCartFeatureCartListComponent } from './orderapp-cart-feature-cart-list.component';

describe('OrderappCartFeatureCartListComponent', () => {
  let component: OrderappCartFeatureCartListComponent;
  let fixture: ComponentFixture<OrderappCartFeatureCartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCartFeatureCartListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCartFeatureCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
