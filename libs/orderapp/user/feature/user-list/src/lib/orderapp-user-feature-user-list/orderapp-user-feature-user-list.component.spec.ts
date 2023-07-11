import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappUserFeatureUserListComponent } from './orderapp-user-feature-user-list.component';

describe('OrderappUserFeatureUserListComponent', () => {
  let component: OrderappUserFeatureUserListComponent;
  let fixture: ComponentFixture<OrderappUserFeatureUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappUserFeatureUserListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderappUserFeatureUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
