import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappPossessionFeatureSessionAddComponent } from './orderapp-possession-feature-session-add.component';

describe('OrderappPossessionFeatureSessionAddComponent', () => {
  let component: OrderappPossessionFeatureSessionAddComponent;
  let fixture: ComponentFixture<OrderappPossessionFeatureSessionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappPossessionFeatureSessionAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappPossessionFeatureSessionAddComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
