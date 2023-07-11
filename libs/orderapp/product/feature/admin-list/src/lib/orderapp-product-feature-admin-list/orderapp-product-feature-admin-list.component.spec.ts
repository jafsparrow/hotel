import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureAdminListComponent } from './orderapp-product-feature-admin-list.component';

describe('OrderappProductFeatureAdminListComponent', () => {
  let component: OrderappProductFeatureAdminListComponent;
  let fixture: ComponentFixture<OrderappProductFeatureAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureAdminListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappProductFeatureAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
