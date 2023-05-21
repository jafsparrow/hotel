import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappSharedDataAccessComponent } from './orderapp-shared-data-access.component';

describe('OrderappSharedDataAccessComponent', () => {
  let component: OrderappSharedDataAccessComponent;
  let fixture: ComponentFixture<OrderappSharedDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappSharedDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappSharedDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
