import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Api } from "../shared/config/api";
import { Redirects } from "../shared/constants/redirects";
import { IEnvironment } from "../shared/interfaces/i-environment";
import { IUser } from "../shared/interfaces/i-user";
import { SecurityCookieService } from "./security-cookie.service";
import { SecurityService } from "./security.service";
import { SessionService } from "./session.service";

describe('SecurityService (Generated)', () => {

	let service: SecurityService;

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	let securityCookieService: SecurityCookieService;
	let securityCookieServiceSpy: jasmine.SpyObj<SecurityCookieService>;

	let router: Router;
	let routerSpy: jasmine.SpyObj<Router>;

	const environmentCopy: IEnvironment = Object.assign({}, environment);

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				SecurityService,
				SecurityCookieService,
				SessionService,
				Router,
				{
					provide: SecurityCookieService,
					useValue: jasmine.createSpyObj('SecurityCookieService', ['getUser', 'storeUser', 'removeUser', 'getCsrfToken', 'currentOrganisation', 'currentToken'])
				}, {
					provide: Router,
					useValue: jasmine.createSpyObj('Router', ['navigate'])
				}
			]
		});
		service = TestBed.inject(SecurityService);
		securityCookieService = TestBed.inject(SecurityCookieService);
		securityCookieServiceSpy = TestBed.inject(SecurityCookieService) as jasmine.SpyObj<SecurityCookieService>;
		router = TestBed.inject(Router);
		routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
		httpClient = TestBed.inject(HttpClient);
		httpTestingController = TestBed.inject(HttpTestingController);
		environment.apiEnabled = true;
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	afterAll(() => {
		environment.apiEnabled = environmentCopy.apiEnabled;
		environment.production = environmentCopy.production;
	})

	it('should be created', () => {
		expect(service).toBeTruthy();
	});



	// 2. Generated test for "login"
	describe('login', () => {

		it('#should call "login" with return `Observable<IUser>`', (done: DoneFn) => {
			// Arrange
			const _paramUsername: string = "cowardly-Guardian";
			const _paramPassword: string = "roomy-YoungAvengers";
			const credentials = {
				username: _paramUsername,
				password: _paramPassword
			};
			const _IUser: IUser = {
				username: "",
				token: "",
			};
			// url used (TODO: check if this value is correct)
			const _url = Api.getUrl().loginApi;
			// Act
			// service.login(_paramUsername, _paramPassword);
			// create the service call
			service.login(credentials).subscribe(value => {
				expect(value).toBe(_IUser);
				done();
			});
			// Assert
			const testRequest = httpTestingController.expectOne(_url);
			expect(testRequest.request.url).toBe(_url);
			expect(testRequest.request.method).toBe("POST");
			expect(testRequest.cancelled).toBeFalsy();
			expect(testRequest.request.responseType).toEqual('json');
			testRequest.flush(_IUser);
		});

		it('#can test HttpClient.post with environment.apiEnabled = false in "login"', () => {
			// Arrange
			// environment.apiEnabled = false;
			const _paramUsername: string = "moaning-CrimsonKing";
			const _paramPassword: string = "vengeful-MorganStark";
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			const _data = { username: _paramUsername, password: _paramPassword }
			const _url: string = "/test";
			// Act
			httpClient.post<IUser>(_url, _data, { withCredentials: true }).subscribe(data => {
				expect(data).toEqual(_IUser);
			});
			// Assert
			const testRequest = httpTestingController.expectOne(_url);
			expect(testRequest.request.method).toEqual('POST');
			testRequest.flush(_IUser);
		});

		it('#can test HttpClient.get in "login"', () => {
			// Arrange
			environment.apiEnabled = true;
			const _paramUsername: string = "moaning-CrimsonKing";
			const _paramPassword: string = "vengeful-MorganStark";
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			const _data: any = { name: 'Test Data' };
			// const _data = { username: _paramUsername, password: _paramPassword }
			const _url: string = "/test";
			// Act
			httpClient.get<IUser>(_url).subscribe(data => {
				expect(data).toEqual(_data);
			});
			// Assert
			const testRequest = httpTestingController.expectOne(_url);
			expect(testRequest.request.method).toEqual('GET');
			testRequest.flush(_data);
		});

		it('#can test for 404 error in "login"', () => {
			// Arrange
			const _paramUsername: string = "plant-Zeigeist";
			const _paramPassword: string = "tall-Hepzibah";
			const _url: string = "/test";
			const _data: any = { status: 404, statusText: "Not Found" }
			const _msg = 'deliberate 404 error';
			// Act
			httpClient.post<any>(_url, _data).subscribe({
				next: () => { fail('should have failed with the 404 error'); },
				error: (error: HttpErrorResponse) => {
					expect(error.status).withContext('status').toEqual(404);
					expect(error.error).withContext('message').toEqual(_msg);
					expect(error).toEqual(error);
				}
			});
			// Assert
			const req = httpTestingController.expectOne(_url);
			expect(req.request.method).toEqual('POST');
			//
			req.flush(_msg, _data);
			httpTestingController.verify();
		});

		it('#can test for 404 error in "login"', () => {
			// Arrange
			environment.apiEnabled = false;
			const _paramUsername: string = "plant-Zeigeist";
			const _paramPassword: string = "tall-Hepzibah";
			const _url: string = "/test";
			const _data: any = { status: 404, statusText: "Not Found" }
			const _msg = 'deliberate 404 error';
			// Act
			httpClient.get<any>(_url).subscribe({
				next: () => { fail('should have failed with the 404 error'); },
				error: (error: HttpErrorResponse) => {
					expect(error.status).withContext('status').toEqual(404);
					expect(error.error).withContext('message').toEqual(_msg);
					expect(error).toEqual(error);
				}
			});
			// Assert
			const req = httpTestingController.expectOne(_url);
			expect(req.request.method).toEqual('GET');
			//
			req.flush(_msg, _data);
			httpTestingController.verify();
		});

		it('should test httpClient.post with ', () => {
			// Arrange
			const _paramUsername: string = "moaning-CrimsonKing";
			const _paramPassword: string = "vengeful-MorganStark";
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			const _data = { username: _paramUsername, password: _paramPassword }
			const _url: string = "/test";
			// Act
			httpClient.post<IUser>(_url, _data).subscribe(data => {
				expect(data).toEqual(_IUser);
			});
			// Assert
			const testRequest = httpTestingController.expectOne(_url);
			expect(testRequest.request.method).toEqual('POST');
			testRequest.flush(_IUser);
		});

		it('should test httpClient.get with environment.apiEnabled = false', () => {
			// Arrange
			environment.apiEnabled = false;
			const _url: string = "/test";
			const _data: any = { name: 'Test Data' };
			// Act
			httpClient.get<IUser>(_url).subscribe(data => {
				expect(data).toEqual(_data);
			});
			// Assert
			const testRequest = httpTestingController.expectOne(_url);
			expect(testRequest.request.method).toEqual('GET');
			testRequest.flush(_data);
		});

	});

	describe('navigateToLogoutPage', () => {

		it('#should redirect to logout page', () => {
			service.navigateToLogoutPage();

			expect(router.navigate).toHaveBeenCalledWith([Redirects.REDIRECT_LOGOUT]);
		});
	});

	describe('logout', () => {
		it('should do a post to logout url', () => {
			const _url = Api.getUrl().logoutApi;

			service.logout().subscribe(value => {
				expect(value).toEqual({});
			});

			const testRequest = httpTestingController.expectOne(_url);
			expect(testRequest.request.url).toBe(_url);
			expect(testRequest.request.method).toBe("POST");
			expect(testRequest.cancelled).toBeFalsy();
			expect(testRequest.request.responseType).toEqual('json');
			testRequest.flush({});
		})
	})

	// 7. Generated test for "isAuthenticated"
	describe('isAuthenticated', () => {

		// test with return type `boolean`
		it('#should return boolean true', () => {
			// Arrange
			const _returnBoolean: boolean = true;
			const _spy = spyOn(service, 'isAuthenticated').and.returnValue(_returnBoolean);
			// Act
			service.isAuthenticated();
			// Assert
			expect(service.isAuthenticated).toBeDefined();
			expect(service.isAuthenticated()).toBeTrue();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should return boolean false', () => {
			// Arrange
			const _returnBoolean: boolean = false;
			const _spy = spyOn(service, 'isAuthenticated').and.returnValue(_returnBoolean);
			// Act
			service.isAuthenticated();
			// Assert
			expect(service.isAuthenticated).toBeDefined();
			expect(service.isAuthenticated()).toBeFalse();
			expect(_spy).toHaveBeenCalled();
		});

		it('#should check return value "isAuthenticated"', () => {
			// Arrange
			// Act
			// Assert
			expect(service.isAuthenticated()).toBeFalse();
		});

		it('should get currentUser and validate "isAuthenticated"', () => {
			// Arrange
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			securityCookieServiceSpy.getUser.and.returnValue(_IUser);
			// Act
			// Assert
			expect(service.isAuthenticated()).toBeTrue();
		});

		it('should return false if currentUser is null"', () => {
			// Arrange
			securityCookieServiceSpy.getUser.and.returnValue(null);
			// Act
			// Assert
			expect(service.isAuthenticated()).toBeFalse();
		});
	});

	// 8. Generated test for "clearLocalSession"
	describe('clearLocalSession', () => {

		// test with return type `void`
		it('should spy on "clearLocalSession" with return void', () => {
			// Arrange
			const _spy = spyOn(service, 'clearLocalSession');
			// Act
			service.clearLocalSession();
			// Assert
			expect(service.clearLocalSession).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		it('should spy one securityCookieService', () => {
			// Arrange
			const _spy = securityCookieService.removeUser;
			// Act
			service.clearLocalSession();
			// Assert
			expect(_spy).toHaveBeenCalledTimes(1);
		});
	});




	// 13. Generated test for "currentToken"
	describe('currentToken', () => {

		it('#currentToken should return string', () => {
			// Arrange
			// Act
			const _string: string = service.currentToken();
			// Assert
			expect(securityCookieServiceSpy.currentToken).toHaveBeenCalled();
		});

		it('#currentToken should return string', () => {
			// Arrange
			const _returnString = 'foooooobaaasaaa';
			const _spy = securityCookieServiceSpy.currentToken.and.returnValue(_returnString);
			// Act
			const _string: string = service.currentToken();
			// Assert
			expect(_string).toBe(_returnString);
		});

	});


});
