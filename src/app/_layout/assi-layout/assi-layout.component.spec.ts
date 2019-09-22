import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssiLayoutComponent } from './assi-layout.component';

describe('AssiLayoutComponent', () => {
  let component: AssiLayoutComponent;
  let fixture: ComponentFixture<AssiLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssiLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
