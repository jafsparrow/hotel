import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCompanyDataAccessComponent } from './orderapp-company-data-access.component';

describe('OrderappCompanyDataAccessComponent', () => {
  let component: OrderappCompanyDataAccessComponent;
  let fixture: ComponentFixture<OrderappCompanyDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCompanyDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCompanyDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
