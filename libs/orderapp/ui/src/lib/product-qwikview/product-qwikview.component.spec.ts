import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductQwikviewComponent } from './product-qwikview.component';

describe('ProductQwikviewComponent', () => {
  let component: ProductQwikviewComponent;
  let fixture: ComponentFixture<ProductQwikviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductQwikviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductQwikviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
