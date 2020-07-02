import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallleAnuncioComponent } from './detallle-anuncio.component';

describe('DetallleAnuncioComponent', () => {
  let component: DetallleAnuncioComponent;
  let fixture: ComponentFixture<DetallleAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallleAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallleAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
