import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCategoryFeatureAddComponent } from './orderapp-category-feature-add.component';

describe('OrderappCategoryFeatureAddComponent', () => {
  let component: OrderappCategoryFeatureAddComponent;
  let fixture: ComponentFixture<OrderappCategoryFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCategoryFeatureAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCategoryFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
