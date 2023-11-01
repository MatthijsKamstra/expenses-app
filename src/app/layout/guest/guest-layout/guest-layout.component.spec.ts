import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GuestLayoutComponent } from './guest-layout.component';

describe('GuestLayoutComponent', () => {
	let component: GuestLayoutComponent;
	let fixture: ComponentFixture<GuestLayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GuestLayoutComponent],
			schemas: [NO_ERRORS_SCHEMA]
		})
			.compileComponents();

		fixture = TestBed.createComponent(GuestLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
