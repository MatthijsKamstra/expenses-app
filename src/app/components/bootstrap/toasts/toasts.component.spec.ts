import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsComponent } from './toasts.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ToastsComponent', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
