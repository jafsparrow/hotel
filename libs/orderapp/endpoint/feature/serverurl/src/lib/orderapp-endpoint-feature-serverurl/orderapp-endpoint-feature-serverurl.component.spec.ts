import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappEndpointFeatureServerurlComponent } from './orderapp-endpoint-feature-serverurl.component';

describe('OrderappEndpointFeatureServerurlComponent', () => {
  let component: OrderappEndpointFeatureServerurlComponent;
  let fixture: ComponentFixture<OrderappEndpointFeatureServerurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappEndpointFeatureServerurlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappEndpointFeatureServerurlComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
