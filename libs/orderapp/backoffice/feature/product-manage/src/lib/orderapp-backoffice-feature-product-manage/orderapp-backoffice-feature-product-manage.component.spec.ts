import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureProductManageComponent } from './orderapp-backoffice-feature-product-manage.component';

describe('OrderappBackofficeFeatureProductManageComponent', () => {
  let component: OrderappBackofficeFeatureProductManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureProductManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureProductManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureProductManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
