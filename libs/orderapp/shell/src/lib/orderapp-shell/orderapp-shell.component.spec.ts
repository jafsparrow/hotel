import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappShellComponent } from './orderapp-shell.component';

describe('OrderappShellComponent', () => {
  let component: OrderappShellComponent;
  let fixture: ComponentFixture<OrderappShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
