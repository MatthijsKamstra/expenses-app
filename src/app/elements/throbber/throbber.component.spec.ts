
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPEC_CONST } from 'src/app/shared/test/spec-helpers/constants.spec-helper';

import { ThrobberComponent } from './throbber.component';

// import directly from throbber.component
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

describe('ThrobberComponent (Generated)', () => {

	let component: ThrobberComponent;
	let fixture: ComponentFixture<ThrobberComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [ThrobberComponent],
			providers: [],

		}).compileComponents();
		fixture = TestBed.createComponent(ThrobberComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// ThrobberComponent
	describe('ThrobberComponent class vars', () => {

		it('#should set "noData" with `boolean` value', () => {
			// Arrange
			const _noData: boolean = false;
			const _initialNoData: boolean = component.noData;
			component.noData = _noData;
			// Act
			// component.ngOnInit();
			// Assert
			expect(_initialNoData).toBe(false);
			expect(component.noData).toBe(_noData);
		});

	});

	// ThrobberComponent
	describe('ThrobberComponent html components', () => {

		it('should "app-throbber-data-no" be visible', () => {
			// Arrange
			component.noData = true;
			fixture.detectChanges();
			// Act
			const _divVisible: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-throbber-data-no"]')).nativeElement;
			const _divHidden = fixture.debugElement.query(By.css('[data-testid="app-throbber-data-yes"]'));
			// Assert
			expect(_divVisible).toBeTruthy();
			expect(_divHidden).toBeNull();
		});

		it('should "app-throbber-data-yes" be visible', () => {
			// Arrange
			component.noData = false;
			fixture.detectChanges();
			// Act
			const _divVisible: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-throbber-data-yes"]')).nativeElement;
			const _divHidden = fixture.debugElement.query(By.css('[data-testid="app-throbber-data-no"]'));
			// Assert
			expect(_divVisible).toBeTruthy();
			expect(_divHidden).toBeNull();
		});

	});

});
