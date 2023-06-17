import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeaturePrintProgressComponent } from './orderapp-order-feature-print-progress.component';

describe('OrderappOrderFeaturePrintProgressComponent', () => {
  let component: OrderappOrderFeaturePrintProgressComponent;
  let fixture: ComponentFixture<OrderappOrderFeaturePrintProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeaturePrintProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappOrderFeaturePrintProgressComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
