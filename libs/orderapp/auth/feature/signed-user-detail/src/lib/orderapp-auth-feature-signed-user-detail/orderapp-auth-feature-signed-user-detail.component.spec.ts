import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappAuthFeatureSignedUserDetailComponent } from './orderapp-auth-feature-signed-user-detail.component';

describe('OrderappAuthFeatureSignedUserDetailComponent', () => {
  let component: OrderappAuthFeatureSignedUserDetailComponent;
  let fixture: ComponentFixture<OrderappAuthFeatureSignedUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappAuthFeatureSignedUserDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappAuthFeatureSignedUserDetailComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
