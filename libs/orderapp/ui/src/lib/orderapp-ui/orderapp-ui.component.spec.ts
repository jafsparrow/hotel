import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappUiComponent } from './orderapp-ui.component';

describe('OrderappUiComponent', () => {
  let component: OrderappUiComponent;
  let fixture: ComponentFixture<OrderappUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
