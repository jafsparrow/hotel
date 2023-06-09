import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderappProductFeatureModifierListComponent } from './orderapp-product-feature-modifier-list.component';

describe('OrderappProductFeatureModifierListComponent', () => {
  let component: OrderappProductFeatureModifierListComponent;
  let fixture: ComponentFixture<OrderappProductFeatureModifierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderappProductFeatureModifierListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrderappProductFeatureModifierListComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
