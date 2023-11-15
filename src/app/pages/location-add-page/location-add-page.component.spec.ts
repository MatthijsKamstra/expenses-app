import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAddPageComponent } from './location-add-page.component';

describe('LocationAddPageComponent', () => {
  let component: LocationAddPageComponent;
  let fixture: ComponentFixture<LocationAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
