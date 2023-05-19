import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureCategoriesComponent } from './orderapp-product-feature-categories.component';

describe('OrderappProductFeatureCategoriesComponent', () => {
  let component: OrderappProductFeatureCategoriesComponent;
  let fixture: ComponentFixture<OrderappProductFeatureCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappProductFeatureCategoriesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
