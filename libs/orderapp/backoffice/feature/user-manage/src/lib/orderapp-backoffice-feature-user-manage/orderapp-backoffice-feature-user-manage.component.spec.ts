import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureUserManageComponent } from './orderapp-backoffice-feature-user-manage.component';

describe('OrderappBackofficeFeatureUserManageComponent', () => {
  let component: OrderappBackofficeFeatureUserManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureUserManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureUserManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureUserManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
