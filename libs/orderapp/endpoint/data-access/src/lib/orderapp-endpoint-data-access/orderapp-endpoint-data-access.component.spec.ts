import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappEndpointDataAccessComponent } from './orderapp-endpoint-data-access.component';

describe('OrderappEndpointDataAccessComponent', () => {
  let component: OrderappEndpointDataAccessComponent;
  let fixture: ComponentFixture<OrderappEndpointDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappEndpointDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappEndpointDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
