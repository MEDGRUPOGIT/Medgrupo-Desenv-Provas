import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductsComponent } from './modal-products.component';

describe('ModalProductsComponent', () => {
  let component: ModalProductsComponent;
  let fixture: ComponentFixture<ModalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
