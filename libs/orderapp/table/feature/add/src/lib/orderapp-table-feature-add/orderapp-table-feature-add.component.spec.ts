import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappTableFeatureAddComponent } from './orderapp-table-feature-add.component';

describe('OrderappTableFeatureAddComponent', () => {
  let component: OrderappTableFeatureAddComponent;
  let fixture: ComponentFixture<OrderappTableFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappTableFeatureAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappTableFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
