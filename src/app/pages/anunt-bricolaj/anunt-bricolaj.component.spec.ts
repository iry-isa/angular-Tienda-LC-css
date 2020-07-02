import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntBricolajComponent } from './anunt-bricolaj.component';

describe('AnuntBricolajComponent', () => {
  let component: AnuntBricolajComponent;
  let fixture: ComponentFixture<AnuntBricolajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntBricolajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntBricolajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
