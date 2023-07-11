import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappUserFeatureUserAddComponent } from './orderapp-user-feature-user-add.component';

describe('OrderappUserFeatureUserAddComponent', () => {
  let component: OrderappUserFeatureUserAddComponent;
  let fixture: ComponentFixture<OrderappUserFeatureUserAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappUserFeatureUserAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappUserFeatureUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
