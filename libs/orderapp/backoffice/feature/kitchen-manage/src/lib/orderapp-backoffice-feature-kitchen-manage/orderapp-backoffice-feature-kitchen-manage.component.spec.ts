import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureKitchenManageComponent } from './orderapp-backoffice-feature-kitchen-manage.component';

describe('OrderappBackofficeFeatureKitchenManageComponent', () => {
  let component: OrderappBackofficeFeatureKitchenManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureKitchenManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureKitchenManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureKitchenManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
