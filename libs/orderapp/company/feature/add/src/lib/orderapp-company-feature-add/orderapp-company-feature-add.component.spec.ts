import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCompanyFeatureAddComponent } from './orderapp-company-feature-add.component';

describe('OrderappCompanyFeatureAddComponent', () => {
  let component: OrderappCompanyFeatureAddComponent;
  let fixture: ComponentFixture<OrderappCompanyFeatureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCompanyFeatureAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCompanyFeatureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
