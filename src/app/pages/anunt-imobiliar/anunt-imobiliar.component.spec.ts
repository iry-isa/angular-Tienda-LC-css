import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntImobiliarComponent } from './anunt-imobiliar.component';

describe('AnuntImobiliarComponent', () => {
  let component: AnuntImobiliarComponent;
  let fixture: ComponentFixture<AnuntImobiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntImobiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntImobiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
