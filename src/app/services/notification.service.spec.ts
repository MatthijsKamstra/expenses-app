import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { NotificationEnum } from "../shared/enums/notification.enum";
import { INotification } from "../shared/interfaces/i-notification";
import { NotificationService } from "./notification.service";


describe('NotificationService (Generated)', () => {

	let service: NotificationService;
	let notificationServiceSpy: jasmine.SpyObj<NotificationService>;



	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [NotificationService,]
		});
		service = TestBed.inject(NotificationService);
		notificationServiceSpy = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;

		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});



	// 3. Generated test for "default"
	describe('default', () => {

		// test with return type `void`
		it('#should spy on "default" with return void', () => {
			// Arrange
			const _paramMessage: string = "teeny-tiny-CaptainStacy";
			const _paramDuration: number = 3000;
			// Act
			service.default(_paramMessage, _paramDuration);
			// Assert
			expect(service.default).toBeDefined();
		});

	});

	// 4. Generated test for "success"
	describe('success', () => {

		// test with return type `void`
		it('#should spy on "success" with return void', () => {
			// Arrange
			const _paramMessage: string = "skinny-Colossus";
			const _paramDuration: number = 3000;
			const _spy = spyOn(service, 'success');
			// Act
			service.success(_paramMessage, _paramDuration);
			// Assert
			expect(service.success).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 5. Generated test for "warning"
	describe('warning', () => {

		// test with return type `void`
		it('#should spy on "warning" with return void', () => {
			// Arrange
			const _paramMessage: string = "acidic-NorrinRadd";
			const _paramDuration: number = 3000;
			// Act
			service.warning(_paramMessage, _paramDuration);
			// Assert
			expect(service.warning).toBeDefined();
		});


	});

	// 6. Generated test for "error"
	describe('error', () => {

		// test with return type `void`
		it('#should spy on "error" with return void', () => {
			// Arrange
			const _paramMessage: string = "blue-eyed-Stingray";
			const _paramDuration: number = 0;
			// Act
			service.error(_paramMessage, _paramDuration);
			// Assert
			expect(service.error).toBeDefined();
		});

	});

	// 7. Generated test for "info"
	describe('info', () => {

		// test with return type `void`
		it('#should spy on "info" with return void', () => {
			// Arrange
			const _paramMessage: string = "cruel-Centurions";
			const _paramDuration: number = 3000;
			const _spy = spyOn(service, 'info');
			// Act
			service.info(_paramMessage, _paramDuration);
			// Assert
			expect(service.info).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 8. Generated test for "inject"
	describe('inject', () => {

		// test with return type `void`
		it('#should spy on "inject" with return void', () => {
			// Arrange
			const _paramMessage: string = "normal-Scarecrow";
			const _paramType: NotificationEnum = NotificationEnum.INFO;
			const _paramDuration: number = 3000;
			const _spy = spyOn(service, 'inject');
			// Act
			service.inject(_paramMessage, _paramType, _paramDuration);
			// Assert
			expect(service.inject).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

	});

	// 10. Generated test for "getObservable"
	describe('getObservable', () => {

		it('#should spy on "getObservable" call and return dummy data', () => {
			// Arrange
			const _INotification: INotification = {
				id: 0,
				type: undefined,
				title: "",
				message: "",
				duration: 0,
				date: new Date()
			};
			// command click on "getObservable()" to see what value it will return
			const _spy = spyOn(service, 'getObservable').and.returnValue(of(_INotification));
			// Act
			service.getObservable();
			// Assert
			expect(service.getObservable).toHaveBeenCalledWith();

		});

	});


});
