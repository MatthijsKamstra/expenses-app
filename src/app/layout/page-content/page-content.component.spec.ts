import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentComponent } from './page-content.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PageContentComponent', () => {
  let component: PageContentComponent;
  let fixture: ComponentFixture<PageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContentComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
