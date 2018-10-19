import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NochangeDetectorComponent } from './nochange-detector.component';

describe('NochangeDetectorComponent', () => {
  let component: NochangeDetectorComponent;
  let fixture: ComponentFixture<NochangeDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NochangeDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NochangeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
