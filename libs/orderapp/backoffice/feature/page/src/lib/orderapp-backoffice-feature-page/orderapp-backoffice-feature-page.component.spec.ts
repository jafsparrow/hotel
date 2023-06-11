import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappBackofficeFeaturePageComponent } from './orderapp-backoffice-feature-page.component';

describe('OrderappBackofficeFeaturePageComponent', () => {
  let component: OrderappBackofficeFeaturePageComponent;
  let fixture: ComponentFixture<OrderappBackofficeFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappBackofficeFeaturePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappBackofficeFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
