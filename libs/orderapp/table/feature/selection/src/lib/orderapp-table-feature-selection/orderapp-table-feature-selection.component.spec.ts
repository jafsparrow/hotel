import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappTableFeatureSelectionComponent } from './orderapp-table-feature-selection.component';

describe('OrderappTableFeatureSelectionComponent', () => {
  let component: OrderappTableFeatureSelectionComponent;
  let fixture: ComponentFixture<OrderappTableFeatureSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappTableFeatureSelectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappTableFeatureSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
