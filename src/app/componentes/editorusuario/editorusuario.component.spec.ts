import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorusuarioComponent } from './editorusuario.component';

describe('EditorusuarioComponent', () => {
  let component: EditorusuarioComponent;
  let fixture: ComponentFixture<EditorusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
