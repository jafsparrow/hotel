import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureCategoryManageComponent } from './orderapp-backoffice-feature-category-manage.component';

describe('OrderappBackofficeFeatureCategoryManageComponent', () => {
  let component: OrderappBackofficeFeatureCategoryManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureCategoryManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureCategoryManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureCategoryManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
