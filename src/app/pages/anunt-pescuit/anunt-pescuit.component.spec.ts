import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntPescuitComponent } from './anunt-pescuit.component';

describe('AnuntPescuitComponent', () => {
  let component: AnuntPescuitComponent;
  let fixture: ComponentFixture<AnuntPescuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntPescuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntPescuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
