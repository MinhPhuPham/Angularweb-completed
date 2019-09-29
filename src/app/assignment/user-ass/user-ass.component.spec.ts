import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssComponent } from './user-ass.component';

describe('UserAssComponent', () => {
  let component: UserAssComponent;
  let fixture: ComponentFixture<UserAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
