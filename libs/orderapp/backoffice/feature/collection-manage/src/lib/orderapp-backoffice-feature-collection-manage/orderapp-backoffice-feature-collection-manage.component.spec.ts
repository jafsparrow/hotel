import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeatureCollectionManageComponent } from './orderapp-backoffice-feature-collection-manage.component';

describe('OrderappBackofficeFeatureCollectionManageComponent', () => {
  let component: OrderappBackofficeFeatureCollectionManageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeatureCollectionManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeatureCollectionManageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappBackofficeFeatureCollectionManageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
