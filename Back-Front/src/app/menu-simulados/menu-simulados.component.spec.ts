import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSimuladosComponent } from './menu-simulados.component';

describe('MenuSimuladosComponent', () => {
  let component: MenuSimuladosComponent;
  let fixture: ComponentFixture<MenuSimuladosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSimuladosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSimuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
