import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimospedidosComponent } from './ultimospedidos.component';

describe('UltimospedidosComponent', () => {
  let component: UltimospedidosComponent;
  let fixture: ComponentFixture<UltimospedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimospedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimospedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
