import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureProductListComponent } from './orderapp-product-feature-product-list.component';

describe('OrderappProductFeatureProductListComponent', () => {
  let component: OrderappProductFeatureProductListComponent;
  let fixture: ComponentFixture<OrderappProductFeatureProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureProductListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappProductFeatureProductListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
