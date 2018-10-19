import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureIndexComponent } from './voiture-index.component';

describe('VoitureIndexComponent', () => {
  let component: VoitureIndexComponent;
  let fixture: ComponentFixture<VoitureIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoitureIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
