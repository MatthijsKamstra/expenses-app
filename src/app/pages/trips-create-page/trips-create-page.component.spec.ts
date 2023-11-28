import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCreatePageComponent } from './trips-create-page.component';

describe('TripsCreatePageComponent', () => {
  let component: TripsCreatePageComponent;
  let fixture: ComponentFixture<TripsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
