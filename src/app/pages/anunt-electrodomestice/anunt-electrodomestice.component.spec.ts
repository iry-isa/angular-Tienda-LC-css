import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuntElectrodomesticeComponent } from './anunt-electrodomestice.component';

describe('AnuntElectrodomesticeComponent', () => {
  let component: AnuntElectrodomesticeComponent;
  let fixture: ComponentFixture<AnuntElectrodomesticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuntElectrodomesticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuntElectrodomesticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
