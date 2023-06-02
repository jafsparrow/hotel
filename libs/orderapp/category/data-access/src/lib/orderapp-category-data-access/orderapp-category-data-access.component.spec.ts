import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCategoryDataAccessComponent } from './orderapp-category-data-access.component';

describe('OrderappCategoryDataAccessComponent', () => {
  let component: OrderappCategoryDataAccessComponent;
  let fixture: ComponentFixture<OrderappCategoryDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCategoryDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCategoryDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
