import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappOrderFeatureTakeAwayComponent } from './orderapp-order-feature-take-away.component';

describe('OrderappOrderFeatureTakeAwayComponent', () => {
  let component: OrderappOrderFeatureTakeAwayComponent;
  let fixture: ComponentFixture<OrderappOrderFeatureTakeAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappOrderFeatureTakeAwayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappOrderFeatureTakeAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
