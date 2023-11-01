
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPEC_CONST } from 'src/app/shared/test/spec-helpers/constants.spec-helper';

import { Environment } from 'src/app/shared/interfaces/i-environment';
import { IsLocalComponent } from './is-local.component';

// import directly from is-local.component
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { IconsComponent } from '../icons/icons.component';

describe('IsLocalComponent (Generated)', () => {

	let component: IsLocalComponent;
	let fixture: ComponentFixture<IsLocalComponent>;

	const environmentCopy: Environment = Object.assign({}, environment);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				// TranslateModule.forRoot(),
			],
			declarations: [IsLocalComponent],
			providers: [],

		}).compileComponents();
		fixture = TestBed.createComponent(IsLocalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterAll(() => {
		environment.apiEnabled = environmentCopy.apiEnabled;
		environment.production = environmentCopy.production;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// 1. Generated test for "getIcon"
	describe('getIcon', () => {

		// test with return type `string`
		it('#getIcon should return string', () => {
			// Arrange
			environment.apiEnabled = false;
			const _returnString: string = "fa fa-toggle-off";
			// Act
			const _string: string = component.getIcon();
			// Assert
			expect(_string).toBe(_returnString);
		});

		it('#should spy on "getIcon" ', () => {
			// Arrange
			const _returnString: string = "abandoned-UltimateSpiderMan";
			const _spy = spyOn(component, 'getIcon');
			_spy.and.returnValue(_returnString);
			// Act
			const _string: string = component.getIcon();
			// Assert
			expect(component.getIcon).toBeDefined();
			expect(_spy).toHaveBeenCalled();
			expect(_string).toBe(_returnString);
		});

	});

	// 2. Generated test for "getDescription"
	describe('getDescription', () => {

		// test with return type `string`
		it('#getDescription should return string', () => {
			// Arrange
			environment.apiEnabled = false;
			const _returnString: string = "Local";
			// Act
			const _string: string = component.getDescription();
			// Assert
			expect(_string).toBe(_returnString);
		});

		it('#should spy on "getDescription" ', () => {
			// Arrange
			const _returnString: string = "interesting-LivingTribunal";
			const _spy = spyOn(component, 'getDescription');
			_spy.and.returnValue(_returnString);
			// Act
			const _string: string = component.getDescription();
			// Assert
			expect(component.getDescription).toBeDefined();
			expect(_spy).toHaveBeenCalled();
			expect(_string).toBe(_returnString);
		});

	});

	// Template tests

	describe('IsLocalComponent html components', () => {

		it('#should check for "app-icons" (IconsComponent) and additional inputs', () => {
			// Arrange
			environment.apiEnabled = false;
			const _iconsComponent: IconsComponent = fixture.debugElement.query(By.css('[data-testid="app-icons"]')).nativeElement;
			// Act
			component.getDescription();
			fixture.detectChanges();
			// Assert
			expect(_iconsComponent).toBeTruthy();
			expect(_iconsComponent.icon).toBeTruthy();
			expect(_iconsComponent.icon).toBe("fa fa-toggle-off");
		});

		it('#should check for "app-is-local" (IconsComponent) and additional inputs', () => {
			// Arrange
			environment.apiEnabled = false;
			const _isLocalComponent: IsLocalComponent = fixture.debugElement.query(By.css('[data-testid="app-is-local"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_isLocalComponent).toBeTruthy();
		});

	});

});

