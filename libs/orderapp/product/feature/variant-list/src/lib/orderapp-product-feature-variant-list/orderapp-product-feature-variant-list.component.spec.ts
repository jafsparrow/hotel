import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureVariantListComponent } from './orderapp-product-feature-variant-list.component';

describe('OrderappProductFeatureVariantListComponent', () => {
  let component: OrderappProductFeatureVariantListComponent;
  let fixture: ComponentFixture<OrderappProductFeatureVariantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureVariantListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappProductFeatureVariantListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
