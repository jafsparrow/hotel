import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappTableFeatureListComponent } from './orderapp-table-feature-list.component';

describe('OrderappTableFeatureListComponent', () => {
  let component: OrderappTableFeatureListComponent;
  let fixture: ComponentFixture<OrderappTableFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappTableFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappTableFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
