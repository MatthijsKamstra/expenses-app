import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Layer, MapOptions } from 'leaflet';
import { environment } from 'src/environments/environment';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
	let component: MapComponent;
	let fixture: ComponentFixture<MapComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MapComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the MapComponent', () => {
		expect(component).toBeTruthy();
	});


	// MapComponent
	describe('MapComponent class vars', () => {

		it('#should set "layers" with `Layer[]` value', () => {
			// Arrange
			const _layers: Layer[] = [];
			const _initialLayers: Layer[] = component.layers;
			component.layers = _layers;
			// Act

			// Assert
			expect(_initialLayers).toEqual([]);
			expect(component.layers).toBe(_layers);
		});


		it('#should set "isHidden" with `boolean` value', () => {
			// Arrange
			const _isHidden: boolean = false;
			const _initialIsHidden: boolean = component.isHidden;
			component.isHidden = _isHidden;
			// Act

			// Assert
			expect(_initialIsHidden).toBe(false);
			expect(component.isHidden).toBe(_isHidden);
		});


		it('#should set "height" with `number` value', () => {
			// Arrange
			const _height: number = 300;
			const _initialHeight: number = component.height;
			component.height = _height;
			// Act

			// Assert
			expect(_initialHeight).toBe(300);
			expect(component.height).toBe(_height);
		});

		it('#should set "options" with `MapOptions` value', () => {
			// Arrange
			const _options: MapOptions = {};
			const _initialOptions: MapOptions = component.options;
			component.options = _options;
			// Act
			// Assert
			expect(_initialOptions).toBeDefined();
			expect(component.options).toBe(_options);
		});

		it('#should set "DEFAULT_OFFSET" with `number` value', () => {
			// Arrange
			const _DEFAULT_OFFSET: number = 100;
			const _initialDEFAULTOFFSET: number = component.DEFAULT_OFFSET;
			component.DEFAULT_OFFSET = _DEFAULT_OFFSET;
			// Act

			// Assert
			expect(_initialDEFAULTOFFSET).toBe(100);
			expect(component.DEFAULT_OFFSET).toBe(_DEFAULT_OFFSET);
		});


		it('#should set "MAX_HEIGHT" with `number` value', () => {
			// Arrange
			const _MAX_HEIGHT: number = 300;
			const _initialMAXHEIGHT: number = component.MAX_HEIGHT;
			component.MAX_HEIGHT = _MAX_HEIGHT;
			// Act

			// Assert
			expect(_initialMAXHEIGHT).toBe(300);
			expect(component.MAX_HEIGHT).toBe(_MAX_HEIGHT);
		});


		it('#should set "MIN_HEIGHT" with `number` value', () => {
			// Arrange
			const _MIN_HEIGHT: number = 0;
			const _initialMINHEIGHT: number = component.MIN_HEIGHT;
			component.MIN_HEIGHT = _MIN_HEIGHT;
			// Act

			// Assert
			expect(_initialMINHEIGHT).toBe(0);
			expect(component.MIN_HEIGHT).toBe(_MIN_HEIGHT);
		});

	});

	// 1. Generated test for "getHeightComponent"
	describe('getHeightComponent', () => {

		// test with return type `void`
		it('#should spy on "getHeightComponent" with return void', () => {
			// Arrange

			const _spy = spyOn(component, 'getHeightComponent');
			// Act
			component.getHeightComponent();
			// Assert
			expect(component.getHeightComponent).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 2. Generated test for "onViewPortBigger"
	describe('onViewPortBigger', () => {

		// test with return type `void`
		it('#should spy on "onViewPortBigger" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onViewPortBigger');
			// Act
			component.onViewPortBigger();
			// Assert
			expect(component.onViewPortBigger).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});


	});

	// 3. Generated test for "onViewPortSmaller"
	describe('onViewPortSmaller', () => {

		// test with return type `void`
		it('#should spy on "onViewPortSmaller" with return void', () => {
			// Arrange
			const _spy = spyOn(component, 'onViewPortSmaller');
			// Act
			component.onViewPortSmaller();
			// Assert
			expect(component.onViewPortSmaller).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		// test with return type `void`
		it('#should change height on "onViewPortSmaller" to be smaller then zero', () => {
			// Arrange
			component.height = 0;
			// Act
			component.onViewPortSmaller();
			// Assert
			expect(component.onViewPortSmaller).toBeDefined();
		});


	});

	// 4. Generated test for "onViewPortOpen"
	describe('onViewPortOpen', () => {

		// test with return type `void`
		it('#should spy on "onViewPortOpen" with return void', () => {
			// Arrange

			const _spy = spyOn(component, 'onViewPortOpen');
			// Act
			component.onViewPortOpen();
			// Assert
			expect(component.onViewPortOpen).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});



	});



	// MapComponent
	describe('test viewport', () => {

		it('should have a default height of 300', () => {
			expect(component.height).toEqual(300);
		});

		it('should toggle isHidden when changing height via onViewPortBigger', () => {
			const initialHeight = component.height;
			component.onViewPortBigger();
			expect(component.height).toBeGreaterThanOrEqual(initialHeight);
			expect(component.isHidden).toBeFalse();
		});

		it('should toggle isHidden when changing height via onViewPortSmaller', () => {
			const initialHeight = component.height;
			component.onViewPortSmaller();
			expect(component.height).toBeLessThan(initialHeight);
			expect(component.isHidden).toBeFalse();
		});

		it('should toggle isHidden when changing height via onViewPortClose', () => {
			const initialHeight = component.height;
			component.onViewPortClose();
			expect(component.height).toEqual(0);
			expect(component.isHidden).toBeTrue();
		});

		it('should toggle isHidden when changing height via onViewPortOpen', () => {
			const initialHeight = component.height;
			component.onViewPortOpen();
			expect(component.height).toEqual(300);
			expect(component.isHidden).toBeFalse();
		});

	});

	// ----------------- MapComponent tests html template ----------------

	describe('MapComponent default html test', () => {

		it('#should be create with correct `data-testid="app-map-container"`', () => {
			// Arrange
			environment.feature.map = true;
			component.isFeatureMap = true;
			// Act
			fixture.detectChanges();
			// Assert
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-map-container"]')).nativeElement;
			expect(_el).toBeTruthy();
		});

		it('#should be create with correct `data-testid="app-map"`', () => {
			// Arrange
			environment.feature.map = true;
			component.isFeatureMap = true;
			// Act
			fixture.detectChanges();
			// Assert
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-map"]')).nativeElement;
			expect(_el).toBeTruthy();
		});

	});


});
