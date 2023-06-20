import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCoreComponent } from './orderapp-core.component';

describe('OrderappCoreComponent', () => {
  let component: OrderappCoreComponent;
  let fixture: ComponentFixture<OrderappCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
