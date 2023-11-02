
import { TestBed } from '@angular/core/testing';


import { StorageSessionService } from './storage-session.service';

// import directly from sessionService

describe('StorageSessionService (Generated)', () => {

	let service: StorageSessionService;
	// let sessionService: SessionService; // [mck] might be removed in the future
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				// TranslateModule.forRoot(),
			],
			providers: [StorageSessionService,]
		});
		service = TestBed.inject(StorageSessionService);
		// sessionService = TestBed.inject(SessionService); // [mck] might be removed in the future
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// // SessionComponent
	// describe('SessionComponent class vars', () => {
	// });

	// 1. Generated test for "setItem"
	describe('setItem', () => {

		// test with return type `void`
		it('#should spy on "setItem" with return void', () => {
			// Arrange
			const _paramKey: string = "hellish-AlvinMaker";
			const _paramValue: any = {};
			const _spy = spyOn(service, 'setItem');
			// Act
			service.setItem(_paramKey, _paramValue);
			// Assert
			expect(service.setItem).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#setItem should return void', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);
			const _paramKey: string = "tenuous-ClintBarton";
			const _paramValue: any = {};
			// Act
			const _void: void = service.setItem(_paramKey, _paramValue);
			// Assert
			expect(_void).toEqual(_IValue.foo);
		});
		*/;


	});

	// 2. Generated test for "getItem"
	describe('getItem', () => {

		// test with return type `any`
		it('#getItem should return any', () => {
			// FIXME "getItem" with return type `any` (x)
			// Arrange
			const _paramKey: string = "regular-Shape";
			const _returnAny: any = {};
			const _spy = spyOn(service, 'getItem').and.returnValue(_returnAny);
			// Act
			service.getItem(_paramKey);
			// Assert
			expect(service.getItem).toBeDefined();
			expect(service.getItem(_paramKey)).toBe(_returnAny);
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#getItem should return any', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);
			const _paramKey: string = "intelligent-Bloke";
			// Act
			const _any: any = service.getItem(_paramKey);
			// Assert
			expect(_any).toEqual(_IValue.foo);
		});
		*/

	});

	// 3. Generated test for "removeItem"
	describe('removeItem', () => {

		// test with return type `void`
		it('#should spy on "removeItem" with return void', () => {
			// Arrange
			const _paramKey: string = "spiteful-Nextwave";
			const _spy = spyOn(service, 'removeItem');
			// Act
			service.removeItem(_paramKey);
			// Assert
			expect(service.removeItem).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#removeItem should return void', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);
			const _paramKey: string = "obese-Lockjaw";
			// Act
			const _void: void = service.removeItem(_paramKey);
			// Assert
			expect(_void).toEqual(_IValue.foo);
		});
		*/;


	});

	// 4. Generated test for "clear"
	describe('clear', () => {

		// test with return type `void`
		it('#should spy on "clear" with return void', () => {
			// Arrange
			const _spy = spyOn(service, 'clear');
			// Act
			service.clear();
			// Assert
			expect(service.clear).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#clear should return void', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);

			// Act
			const _void: void = service.clear();
			// Assert
			expect(_void).toEqual(_IValue.foo);
		});
		*/;


	});

	// 5. Generated test for "setBool"
	describe('setBool', () => {

		// test with return type `void`
		it('#should spy on "setBool" with return void', () => {
			// Arrange
			const _paramKey: string = "general-BenGrimm";
			const _paramValue: boolean = true;
			const _spy = spyOn(service, 'setBool');
			// Act
			service.setBool(_paramKey, _paramValue);
			// Assert
			expect(service.setBool).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#setBool should return void', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);
			const _paramKey: string = "uneven-GoldenGuardian";
			const _paramValue: boolean = true;
			// Act
			const _void: void = service.setBool(_paramKey, _paramValue);
			// Assert
			expect(_void).toEqual(_IValue.foo);
		});
		*/;


	});

	// 6. Generated test for "getBool"
	describe('getBool', () => {

		// test with return type `boolean`
		it('#should return boolean true', () => {
			// Arrange
			const _paramKey: string = "jobless-CaptainStacy";
			const _returnBoolean: boolean = true;
			const _spy = spyOn(service, 'getBool').and.returnValue(_returnBoolean);
			// Act
			service.getBool(_paramKey);
			// Assert
			expect(service.getBool).toBeDefined();
			expect(service.getBool(_paramKey)).toBeTrue();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should return boolean false', () => {
			// Arrange
			const _paramKey: string = "infamous-TigerShark";
			const _returnBoolean: boolean = false;
			const _spy = spyOn(service, 'getBool').and.returnValue(_returnBoolean);
			// Act
			service.getBool(_paramKey);
			// Assert
			expect(service.getBool).toBeDefined();
			expect(service.getBool(_paramKey)).toBeFalse();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should check return value "getBool"', () => {
			// Arrange
			const _paramKey: string = "infamous-TigerShark";
			// Act
			// Assert
			expect(service.getBool(_paramKey)).toBeFalse();
		});


	});

	// 7. Generated test for "setObject"
	describe('setObject', () => {

		// test with return type `void`
		it('#should spy on "setObject" with return void', () => {
			// Arrange
			const _paramKey: string = "dirty-Hulkling";
			const _paramValue: object = {};
			const _spy = spyOn(service, 'setObject');
			// Act
			service.setObject(_paramKey, _paramValue);
			// Assert
			expect(service.setObject).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#setObject should return void', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);
			const _paramKey: string = "belligerent-Silverclaw";
			const _paramValue: object = SPEC_CONST.getValue(OBJECT); // {};
			// Act
			const _void: void = service.setObject(_paramKey, _paramValue);
			// Assert
			expect(_void).toEqual(_IValue.foo);
		});
		*/;


	});

	// 8. Generated test for "getObject"
	describe('getObject', () => {

		// test with return type `object`
		it('#getObject should return object', () => {
			// FIXME "getObject" with return type `object` (x)
			// Arrange
			const _paramKey: string = "creepy-Sersi";
			const _returnObject: object = {};
			const _spy = spyOn(service, 'getObject').and.returnValue(_returnObject);
			// Act
			service.getObject(_paramKey);
			// Assert
			expect(service.getObject).toBeDefined();
			expect(service.getObject(_paramKey)).toBe(_returnObject);
			expect(_spy).toHaveBeenCalled();
		});

		/*
		// dummy test to write a quick test
		it('#getObject should return object', () => {
			// Arrange
			const _IValue: IValue = SPEC_CONST.getValue(IValue);
			const _paramKey: string = "melted-Deathstrike";
			// Act
			const _object: object = service.getObject(_paramKey);
			// Assert
			expect(_object).toEqual(_IValue.foo);
		});
		*/

	});




	describe('old tests', () => {

		// 1. Generated test for "setItem"
		it('#setItem should return void', () => {
			// Arrange
			const key: string = "";
			const value: any = {};

			const result = service.setItem(key, value);
			const spy = spyOn(service, 'setItem');

			// Act
			service.setItem(key, value);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.setItem).toBeDefined();
		});

		// 2. Generated test for "getItem"
		it('#getItem should return any', () => {
			// Arrange
			const key: string = "foobar";
			const data = { data: 'ffff' }
			service.setItem(key, data);
			const result: any = service.getItem(key);
			const spy = spyOn(service, 'getItem').and.returnValue(data);

			// Act
			service.getItem(key);

			// Assert
			expect(service.getItem).toBeDefined();
			// expect(result).toEqual(JSON.stringify(data));
			expect(spy).toHaveBeenCalled();
			expect(service.getItem(key)).toEqual(data);
		});

		// 3. Generated test for "removeItem"
		it('#removeItem should return void', () => {
			// Arrange
			const key: string = "";

			const result = service.removeItem(key);
			const spy = spyOn(service, 'removeItem');

			// Act
			service.removeItem(key);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.removeItem).toBeDefined();
		});

		// 4. Generated test for "clear"
		it('#clear should return void', () => {
			// Arrange

			const result = service.clear();
			const spy = spyOn(service, 'clear');

			// Act
			service.clear();

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.clear).toBeDefined();
		});

		// 5. Generated test for "setBool"
		it('#setBool should return void', () => {
			// Arrange
			const key: string = "";
			const value: boolean = true;

			const result = service.setBool(key, value);
			const spy = spyOn(service, 'setBool');

			// Act
			service.setBool(key, value);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.setBool).toBeDefined();
		});

		// 6. Generated test for "getBool"
		it('#getBool should return boolean', () => {
			// Arrange
			const key: string = "rest";
			const bool: boolean = false;
			service.setBool(key, bool);
			const result: boolean = service.getBool(key);
			const spy = spyOn(service, 'getBool').and.returnValue(bool);

			// Act
			service.getBool(key);

			// Assert
			expect(result).toBe(false);
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.getBool(key)).toBeFalsy();
			expect(spy).toHaveBeenCalledTimes(2);
			expect(service.getBool(key)).toBeFalse();
			expect(spy).toHaveBeenCalledTimes(3);
			expect(service.getBool).toBeDefined();
		});

		// 7. Generated test for "setObject"
		it('#setObject should return void', () => {
			// Arrange
			const key: string = "";
			const value: object = {};

			const result = service.setObject(key, value);
			const spy = spyOn(service, 'setObject');

			// Act
			service.setObject(key, value);

			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.setObject).toBeDefined();
		});

		// 8. Generated test for "getObject"
		it('#getObject should return object', () => {
			// Arrange
			const key: string = "";
			const data = { data: 'foooo' }

			const result: object = service.getObject(key);
			const spy = spyOn(service, 'getObject').and.returnValue(data);

			// Act
			service.getObject(key);

			// Assert
			expect(service.getObject).toBeDefined();
			// expect(result).toBeNull();
			expect(spy).toHaveBeenCalled();
		});

	});

});
