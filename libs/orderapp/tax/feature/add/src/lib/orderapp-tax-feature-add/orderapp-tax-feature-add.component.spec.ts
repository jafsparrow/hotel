import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappTaxFeatureAddComponent } from './orderapp-tax-feature-add.component';

describe('OrderappTaxFeatureAddComponent', () => {
  let component: OrderappTaxFeatureAddComponent;
  let fixture: ComponentFixture<OrderappTaxFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappTaxFeatureAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappTaxFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
