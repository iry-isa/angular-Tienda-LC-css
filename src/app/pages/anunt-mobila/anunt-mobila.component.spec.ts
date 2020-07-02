import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntMobilaComponent } from './anunt-mobila.component';

describe('AnuntMobilaComponent', () => {
  let component: AnuntMobilaComponent;
  let fixture: ComponentFixture<AnuntMobilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntMobilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntMobilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
