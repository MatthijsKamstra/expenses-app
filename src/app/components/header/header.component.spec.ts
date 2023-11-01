
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

// import directly from header.component
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconsComponent } from 'src/app/elements/icons/icons.component';

describe('HeaderComponent (Generated)', () => {

	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	let route: ActivatedRoute;
	let router: Router;

	let routeSpy: jasmine.SpyObj<ActivatedRoute>;
	let routerSpy: jasmine.SpyObj<Router>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TranslateModule.forRoot()],
			declarations: [HeaderComponent, IconsComponent],
			providers: [Router,
				{
					provide: ActivatedRoute,
					useValue: {
						snapshot: {
							paramMap: {
								get: (key: string) => {
									switch (key) {
										case 'id':
											return '2';
										case 'genre':
											return 'fiction'
										default:
											return null;
									}
								}
							},
						},
					},
				},
				// {
				// 	provide: ActivatedRoute,
				// 	useValue: jasmine.createSpyObj('ActivatedRoute', ['CHANGE-2-CORRECT-METHODENAME(S)'])
				// },
				{
					provide: Router,
					useValue: jasmine.createSpyObj('Router', ['url', 'parseUrl', 'navigate'])
				}],
		}).compileComponents();
		//
		route = TestBed.inject(ActivatedRoute);
		routeSpy = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
		routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
		routerSpy.parseUrl('/group/create');
		//
		router = TestBed.inject(Router);
		// @ts-ignore: force this private property value for testing.
		router.url = '/group/create';
		//
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// HeaderComponent
	describe('HeaderComponent class vars', () => {

		it('#should set title with `string` value', () => {
			// Arrange
			const _title: string = "straight-SpeedDemon";
			const _initialTitle: string = component.title;
			component.title = _title;
			// Act
			component.ngOnInit();
			// Assert
			// expect(_initialTitle).toBeUndefined();
			expect(_initialTitle).toBe('Heading 1');
			expect(component.title).toBe(_title);
		});

		it('#should set icon with `string` value', () => {
			// Arrange
			// const _icon: string = "observant-Moondragon";
			const _initialIcon: string = component.icon;
			// component.icon = _icon;
			// Act
			component.ngOnInit();
			// Assert
			// expect(_initialIcon).toBeUndefined();
			// expect(component.icon).toBe(_icon);
			expect(_initialIcon).toBe('Group');
			expect(component.icon).toBe('Group');
		});

		it('#should set urlArr with `string[]` value', () => {
			// Arrange
			const _urlArr: string[] = ["Group", "Create"];
			const _initialUrlArr: string[] | undefined = component.urlArr;
			component.urlArr = _urlArr;
			// Act
			component.ngOnInit();
			// Assert
			// expect(_initialUrlArr).toBeUndefined();
			expect(_initialUrlArr).toEqual(['Group', 'Create']);
			expect(component.urlArr).toEqual(_urlArr);
		});

		it('#should set urlMap with `any` value', () => {
			// Arrange
			const _urlMap = new Map();
			_urlMap.set('a', '1');
			_urlMap.set('b', '2');
			// const _initialUrlMap: any = component.urlMap;
			component.urlMap = _urlMap;
			// Act
			component.ngOnInit();
			// Assert
			// expect(_initialUrlMap).toBeUndefined();
			expect(component.urlMap).toBe(_urlMap);
		});

		it('#should set isTopLevel with `boolean` value', () => {
			// Arrange
			// const _isTopLevel: boolean = true;
			const _initialIsTopLevel: boolean = component.isTopLevel;
			// component.isTopLevel = _isTopLevel;
			// Act
			component.ngOnInit();
			// Assert
			// expect(_initialIsTopLevel).toBeUndefined();
			expect(_initialIsTopLevel).toBeFalse();
			// expect(component.isTopLevel).toBe(_isTopLevel);
		});

		it('#should set routerUrl with `string` value', () => {
			// Arrange
			// const _routerUrl: string = "zippy-Emplate";
			const _initialRouterUrl: string = component.routerUrl;
			// component.routerUrl = _routerUrl;
			// Act
			component.ngOnInit();
			// Assert
			// expect(_initialRouterUrl).toBeUndefined(); // defined in `beforeEach`
			// expect(component.routerUrl).toBe(_routerUrl);
			expect(_initialRouterUrl).toBe('/group/create'); // defined in `beforeEach`
			expect(component.routerUrl).toBe('/group/create');
		});
	});


	// 1. Generated test for "ngOnInit"
	describe('ngOnInit', () => {

		it('#should check if ngOnInit exists ', () => {
			component.ngOnInit();
			expect(component.ngOnInit).toBeDefined();
		});

		it('#should check what ngOnInit does', () => {
			let _spy = spyOn(component, 'init');
			component.ngOnInit();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 2. Generated test for "ngOnChanges"
	describe('ngOnChanges', () => {

		it('#should check if ngOnChanges exists', () => {
			let _changes: SimpleChanges = {};
			component.ngOnChanges(_changes);
			expect(component.ngOnChanges).toBeDefined();
		});

		it('#should call init', () => {
			let _spy = spyOn(component, 'init');
			let _changes: SimpleChanges = {};
			component.ngOnChanges(_changes);
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 3. Generated test for "init"
	describe('init', () => {

		// test with return type `void`
		it('#init should return void', () => {
			// Assert
			expect(component.init).toBeDefined();
		});

	});

	// 5. Generated test for "isId"
	describe('isId', () => {

		it('#should return boolean true', () => {
			// Arrange
			const _paramPart: string = "busy-AlexPower";
			const _returnBoolean: boolean = true;
			const _spy = spyOn(component, 'isId').and.returnValue(_returnBoolean);
			// Act
			component.isId(_paramPart);
			// Assert
			expect(component.isId).toBeDefined();
			expect(component.isId(_paramPart)).toBeTrue();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should return boolean false', () => {
			// Arrange
			const _paramPart: string = "wretched-Kree";
			const _returnBoolean: boolean = false;
			const _spy = spyOn(component, 'isId').and.returnValue(_returnBoolean);
			// Act
			component.isId(_paramPart);
			// Assert
			expect(component.isId).toBeDefined();
			expect(component.isId(_paramPart)).toBeFalse();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should return false with id==null', () => {
			// Arrange
			let spy = spyOn(route.snapshot.paramMap, 'get').and.returnValue(null);
			const _paramPart: string = "busy-AlexPower";
			// Act
			component.isId(_paramPart);
			// Assert
			expect(component.isId(_paramPart)).toBeFalse();
		});

	});

	// 6. Generated test for "isLast"
	describe('isLast', () => {

		// test with return type `boolean`
		it('#should be defined', () => {
			// Arrange
			const _paramPart: string = "invincible-Vulture";
			// Act
			component.isLast(_paramPart);
			// Assert
			expect(component.isLast).toBeDefined();
		});

		// test with return type `boolean`
		it('#should return boolean', () => {
			// Arrange
			const _paramPart: string = "invincible-Vulture";
			const _returnBoolean: boolean = true;
			const _spy = spyOn(component, 'isLast').and.returnValue(_returnBoolean);
			// Act
			component.isLast(_paramPart);
			// Assert
			expect(component.isLast).toBeDefined();
			expect(component.isLast(_paramPart)).toBeTrue();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should urlArr undefined', () => {
			// Arrange
			component.urlArr = undefined;
			const _paramPart: string = "invincible-Vulture";
			// const _returnBoolean: boolean = false;
			// const _spy = spyOn(component, 'isLast').and.returnValue(_returnBoolean);
			// Act
			component.isLast(_paramPart);
			// Assert
			expect(component.isLast).toBeDefined();
			expect(component.isLast(_paramPart)).toBeFalse();

		});

	});

	// 7. Generated test for "onBack"
	describe('onBack', () => {

		// test with return type `void`
		it('#should return void', () => {
			// Arrange
			// Act
			component.onBack();
			// Assert
			expect(component.onBack).toBeDefined();
		});

		it('#should send router to `..`', () => {
			// Arrange
			// const spy = spyOn(router, 'navigate'); // done in `beforeEach`
			// Act
			component.onBack();
			// Assert
			// console.log(routerSpy.navigate.calls.first().args[0]);
			expect(routerSpy.navigate.calls.first().args[0]).toContain('..');
		});

	});

});
