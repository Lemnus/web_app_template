import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersecretComponent } from './supersecret.component';

describe('SupersecretComponent', () => {
  let component: SupersecretComponent;
  let fixture: ComponentFixture<SupersecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
