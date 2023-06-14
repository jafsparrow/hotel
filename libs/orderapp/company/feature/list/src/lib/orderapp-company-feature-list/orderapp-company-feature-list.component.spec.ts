import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappCompanyFeatureListComponent } from './orderapp-company-feature-list.component';

describe('OrderappCompanyFeatureListComponent', () => {
  let component: OrderappCompanyFeatureListComponent;
  let fixture: ComponentFixture<OrderappCompanyFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappCompanyFeatureListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappCompanyFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
