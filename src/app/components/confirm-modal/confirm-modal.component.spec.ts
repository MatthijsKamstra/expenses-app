
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmModalComponent } from './confirm-modal.component';

// import directly from confirm-modal.component
import { Component, EventEmitter, Input, Output } from '@angular/core';

describe('ConfirmModalComponent (Generated)', () => {
	let component: ConfirmModalComponent;
	let fixture: ComponentFixture<ConfirmModalComponent>;
	// let bootstrap: any;

	//
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [ConfirmModalComponent],
			providers: [],
		}).compileComponents();
		//
		fixture = TestBed.createComponent(ConfirmModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// ConfirmModalComponent
	describe('ConfirmModalComponent class vars', () => {

		it('#should set "id" with `string` value', () => {
			// Arrange
			const _id: string = "observant-Mindworm";
			const _initialId: string = component.id;
			component.id = _id;
			// Act

			// Assert
			expect(_initialId).toBe('exampleModal');
			expect(component.id).toBe(_id);
		});

		it('#should set "title" with `string` value', () => {
			// Arrange
			const _title: string = "feeble-PowerMan";
			const _initialTitle: string = component.title;
			component.title = _title;
			// Act

			// Assert
			expect(_initialTitle).toBe('Modal title');
			expect(component.title).toBe(_title);
		});

		it('#should set "body" with `string` value', () => {
			// Arrange
			const _body: string = "level-Sauron";
			const _initialBody: string = component.body;
			component.body = _body;
			// Act

			// Assert
			expect(_initialBody).toBe('Modal body goes here');
			expect(component.body).toBe(_body);
		});

		it('#should set "nobutton" with `boolean` value', () => {
			// Arrange
			const _nobutton: boolean = true;
			const _initialNobutton: boolean = component.nobutton;
			component.nobutton = _nobutton;
			// Act

			// Assert
			expect(_initialNobutton).toBe(false);
			expect(component.nobutton).toBe(_nobutton);
		});

		it('#should set "onCancel" with `any` value', () => {
			// Arrange
			const _onCancel: any = {};
			const _initialOnCancel: any = component.onCancel;
			component.onCancel = _onCancel;
			// Act

			// Assert
			expect(_initialOnCancel).toEqual(new EventEmitter<any>());
			expect(component.onCancel).toEqual(_onCancel);
		});

		it('#should set "myModal" with `any` value', () => {
			// Arrange
			const _myModal: any = {};
			const _initialMyModal: any = component.myModal;
			component.myModal = _myModal;
			// Act

			// Assert
			expect(_initialMyModal).toBeUndefined();
			expect(component.myModal).toBe(_myModal);
		});
	});

	// 1. Generated test for "onSubmitHandler"
	describe('onSubmitHandler', () => {

		// test with return type `void`
		it('#should spy on "onSubmitHandler" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onSubmitHandler');
			// Act
			component.onSubmitHandler()
			// Assert
			expect(component.onSubmitHandler).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should spy on "onHide" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onHide');
			// Act
			component.onSubmitHandler()
			// Assert
			expect(_spy).toHaveBeenCalled();
		});

		xit('#should spy on "@Output onCancel" with return void', () => {
			// Arrange
			const _spy = spyOn(component.onCancel, 'emit');
			// Act
			component.onSubmitHandler()
			// Assert
			// expect(_spy).toHaveBeenCalled();
			expect(component.onCancel.emit).toHaveBeenCalled();
		});

	});

	// 2. Generated test for "onCancelHandler"
	describe('onCancelHandler', () => {

		it('#should spy on "onCancelHandler" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onCancelHandler');
			// Act
			component.onCancelHandler()
			// Assert
			expect(component.onCancelHandler).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should spy on "onHide" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onHide');
			// Act
			component.onCancelHandler()
			// Assert
			expect(_spy).toHaveBeenCalled();
		});

		// TODO: ReferenceError: bootstrap is not defined
		xit('#should spy on "@Output onCancel" with return void', () => {
			// Arrange
			const _spy = spyOn(component.onCancel, 'emit');
			// Act
			component.onCancelHandler()
			// Assert
			// expect(_spy).toHaveBeenCalled();
			expect(component.onCancel.emit).toHaveBeenCalled();
		});

	});

	// 3. Generated test for "onHide"
	describe('onHide', () => {

		it('#should spy on "onHide" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onHide');
			// Act
			component.onHide()
			// Assert
			expect(component.onHide).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		xit('#should spy on "myModal hide" with return void', () => {
			var dummyElement = document.createElement('div');
			document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

			const _id: string = 'foo';
			const _modalEl = document.getElementById(_id);

			expect(_modalEl).toBeDefined();
		});

	});

});
