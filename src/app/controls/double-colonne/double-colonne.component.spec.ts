import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleColonneComponent } from './double-colonne.component';

describe('DoubleColonneComponent', () => {
  let component: DoubleColonneComponent;
  let fixture: ComponentFixture<DoubleColonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleColonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleColonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
