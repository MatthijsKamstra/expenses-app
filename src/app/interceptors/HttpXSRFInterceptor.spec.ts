import { HTTP_INTERCEPTORS, HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { NgxTranslateModule } from "../module/translate/translate.module";
import { NotificationService } from "../services/notification.service";
import { SecurityCookieService } from "../services/security-cookie.service";
import { SecurityService } from "../services/security.service";
import { StorageSessionService } from "../services/storage-session.service";
import { Constants } from "../shared/constants/constants";
import { SharedTestData } from "../shared/test/test-data/shared-test-data";
import { HttpXsrfInterceptor } from "./HttpXSRFInterceptor";

describe('HttpXsrfInterceptor', () => {
	let tokenExtractorSpy: jasmine.SpyObj<HttpXsrfTokenExtractor>;
	let securityServiceSpy: jasmine.SpyObj<SecurityService>;
	let sessionServiceSpy: jasmine.SpyObj<StorageSessionService>;
	let securityCookieServiceSpy: jasmine.SpyObj<SecurityCookieService>;
	let notificationServiceSpy: jasmine.SpyObj<NotificationService>;

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	const url = '/test';

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				NgxTranslateModule
			],
			providers: [
				{
					provide: HTTP_INTERCEPTORS,
					useClass: HttpXsrfInterceptor,
					multi: true
				},
				{
					provide: HttpXsrfTokenExtractor,
					useValue: jasmine.createSpyObj('HttpXsrfTokenExtractor', ['getToken'])
				},
				{
					provide: SecurityService,
					useValue: jasmine.createSpyObj('SecurityService', ['navigateToLogoutPage'])
				},
				{
					provide: StorageSessionService,
					useValue: jasmine.createSpyObj('SessionService', ['setItem', 'getItem'])
				},
				{
					provide: SecurityCookieService,
					useValue: jasmine.createSpyObj('SecurityCookieService', ['updateToken'])
				},
				{
					provide: NotificationService,
					useValue: jasmine.createSpyObj('NotificationService', ['error'])
				},
			]
		});

		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);

		tokenExtractorSpy = TestBed.inject(HttpXsrfTokenExtractor) as jasmine.SpyObj<HttpXsrfTokenExtractor>;
		securityServiceSpy = TestBed.inject(SecurityService) as jasmine.SpyObj<SecurityService>;
		sessionServiceSpy = TestBed.inject(StorageSessionService) as jasmine.SpyObj<StorageSessionService>;
		securityCookieServiceSpy = TestBed.inject(SecurityCookieService) as jasmine.SpyObj<SecurityCookieService>;
		notificationServiceSpy = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;

		tokenExtractorSpy.getToken.and.returnValue('token');
		sessionServiceSpy.getItem.and.returnValue('sessionData');
	});

	it('should add headers to request', () => {
		const body = {
			text: 'bla'
		};

		httpClient.get(url).subscribe(response => { })

		const request = httpTestingController.expectOne(url);
		request.flush(body);

		expect(request.request.headers.has(Constants.XSRF_HEADER)).toBeTrue();
		expect(request.request.headers.get(Constants.XSRF_HEADER)).toEqual('token');
		expect(request.request.headers.has(Constants.AUTH_HEADER)).toBeTrue();
		expect(request.request.headers.get(Constants.AUTH_HEADER)).toEqual('sessionData');
		expect(request.request.headers.has(Constants.ORG_HEADER)).toBeTrue();
		expect(request.request.headers.get(Constants.ORG_HEADER)).toEqual('sessionData');

		expect(sessionServiceSpy.setItem).toHaveBeenCalledWith(Constants.SESSION_STORAGE_XSRF_TOKEN, 'token');
	})

	it('should navigate to logout page if externally logged out', () => {
		const body = {
			text: 'auth/realms'
		};
		const header = 'text/html';

		httpClient.get(url).subscribe(response => { })

		const request = httpTestingController.expectOne(url);

		request.flush(body, {
			headers: new HttpHeaders({
				'Content-Type': header
			}),
			status: 200,
			statusText: 'OK'
		});

		expect(securityServiceSpy.navigateToLogoutPage).toHaveBeenCalledOnceWith();
	})

	it('should store token if not externally logged out', () => {
		const body = {
			text: 'bla'
		};
		const xAuthToken = 'xAuthToken';

		httpClient.get(url).subscribe(response => { })

		const request = httpTestingController.expectOne(url);

		request.flush(body, {
			headers: new HttpHeaders({
				'X-Auth-Token': xAuthToken
			}),
			status: 200,
			statusText: 'OK'
		});

		expect(securityCookieServiceSpy.updateToken).toHaveBeenCalledOnceWith(xAuthToken);
	})

	it('should send an error notification if error status is 0', () => {
		httpClient.get(url).subscribe({
			next: () => fail('expected an error, not data'),
			error: (error: HttpErrorResponse) => {
				expect(error.status).withContext('status').toEqual(0);
				expect(error.error).withContext('message').toEqual(SharedTestData.ERROR_MESSAGE);
			}
		})

		const request = httpTestingController.expectOne(url);

		request.flush(SharedTestData.ERROR_MESSAGE, { status: 0, statusText: 'No response' });

		expect(notificationServiceSpy.error).toHaveBeenCalledOnceWith('Network connection was lost');
	})

	it('should navigate to logout page if error status is 401', () => {
		httpClient.get(url).subscribe({
			next: () => fail('expected an error, not data'),
			error: (error: HttpErrorResponse) => {
				expect(error.status).withContext('status').toEqual(401);
				expect(error.error).withContext('message').toEqual(SharedTestData.ERROR_MESSAGE);
			}
		})

		const request = httpTestingController.expectOne(url);

		request.flush(SharedTestData.ERROR_MESSAGE, { status: 401, statusText: 'Unauthorized' });

		expect(securityServiceSpy.navigateToLogoutPage).toHaveBeenCalledOnceWith();
	})
})
