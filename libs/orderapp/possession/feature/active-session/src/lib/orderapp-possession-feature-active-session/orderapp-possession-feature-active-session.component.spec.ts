import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappPossessionFeatureActiveSessionComponent } from './orderapp-possession-feature-active-session.component';

describe('OrderappPossessionFeatureActiveSessionComponent', () => {
  let component: OrderappPossessionFeatureActiveSessionComponent;
  let fixture: ComponentFixture<OrderappPossessionFeatureActiveSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappPossessionFeatureActiveSessionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappPossessionFeatureActiveSessionComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
