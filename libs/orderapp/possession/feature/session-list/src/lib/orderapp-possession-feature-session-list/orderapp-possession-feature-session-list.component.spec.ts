import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappPossessionFeatureSessionListComponent } from './orderapp-possession-feature-session-list.component';

describe('OrderappPossessionFeatureSessionListComponent', () => {
  let component: OrderappPossessionFeatureSessionListComponent;
  let fixture: ComponentFixture<OrderappPossessionFeatureSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappPossessionFeatureSessionListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappPossessionFeatureSessionListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
