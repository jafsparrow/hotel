import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureCompanyManageComponent } from './orderapp-backoffice-feature-company-manage.component';

describe('OrderappBackofficeFeatureCompanyManageComponent', () => {
  let component: OrderappBackofficeFeatureCompanyManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureCompanyManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureCompanyManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureCompanyManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
