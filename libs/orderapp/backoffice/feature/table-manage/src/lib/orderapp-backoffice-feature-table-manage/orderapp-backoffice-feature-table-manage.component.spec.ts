import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureTableManageComponent } from './orderapp-backoffice-feature-table-manage.component';

describe('OrderappBackofficeFeatureTableManageComponent', () => {
  let component: OrderappBackofficeFeatureTableManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureTableManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureTableManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureTableManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
