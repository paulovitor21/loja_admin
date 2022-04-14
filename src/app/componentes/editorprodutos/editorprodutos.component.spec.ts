import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorprodutosComponent } from './editorprodutos.component';

describe('EditorprodutosComponent', () => {
  let component: EditorprodutosComponent;
  let fixture: ComponentFixture<EditorprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
