import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappSharedCoreComponent } from './orderapp-shared-core.component';

describe('OrderappSharedCoreComponent', () => {
  let component: OrderappSharedCoreComponent;
  let fixture: ComponentFixture<OrderappSharedCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappSharedCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappSharedCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
