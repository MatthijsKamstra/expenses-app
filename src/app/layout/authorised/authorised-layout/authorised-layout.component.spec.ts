import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthorisedLayoutComponent } from './authorised-layout.component';

describe('AuthorisedLayoutComponent', () => {
	let component: AuthorisedLayoutComponent;
	let fixture: ComponentFixture<AuthorisedLayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AuthorisedLayoutComponent],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();

		fixture = TestBed.createComponent(AuthorisedLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
