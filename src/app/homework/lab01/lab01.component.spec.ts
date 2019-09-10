import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab01Component } from './lab01.component';

describe('Lab01Component', () => {
  let component: Lab01Component;
  let fixture: ComponentFixture<Lab01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
