import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCategoryFeatureListComponent } from './orderapp-category-feature-list.component';

describe('OrderappCategoryFeatureListComponent', () => {
  let component: OrderappCategoryFeatureListComponent;
  let fixture: ComponentFixture<OrderappCategoryFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCategoryFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCategoryFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
