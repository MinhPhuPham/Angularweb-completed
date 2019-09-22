import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssiHeaderComponent } from './assi-header.component';

describe('AssiHeaderComponent', () => {
  let component: AssiHeaderComponent;
  let fixture: ComponentFixture<AssiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
