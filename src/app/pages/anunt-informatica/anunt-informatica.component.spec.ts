import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntInformaticaComponent } from './anunt-informatica.component';

describe('AnuntInformaticaComponent', () => {
  let component: AnuntInformaticaComponent;
  let fixture: ComponentFixture<AnuntInformaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntInformaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
