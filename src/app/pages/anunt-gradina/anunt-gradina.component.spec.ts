import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntGradinaComponent } from './anunt-gradina.component';

describe('AnuntGradinaComponent', () => {
  let component: AnuntGradinaComponent;
  let fixture: ComponentFixture<AnuntGradinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntGradinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntGradinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
