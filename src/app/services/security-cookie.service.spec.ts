import { TestBed } from "@angular/core/testing";

import { Constants } from "../shared/constants/constants";
import { IUser } from "../shared/interfaces/i-user";
import { SecurityCookieService } from "./security-cookie.service";
import { SessionService } from "./session.service";


describe('SecurityCookieService (Generated)', () => {

	let service: SecurityCookieService;

	let sessionService: SessionService;
	let sessionServiceSpy: jasmine.SpyObj<SessionService>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				// TranslateModule.forRoot(),
			],
			providers: [
				SecurityCookieService,
				SessionService,

				{
					provide: SessionService,
					useValue: jasmine.createSpyObj('SessionService', ['getItem', 'setItem', 'removeItem'])
				},
			]
		});
		service = TestBed.inject(SecurityCookieService);
		sessionService = TestBed.inject(SessionService);
		sessionServiceSpy = TestBed.inject(SessionService) as jasmine.SpyObj<SessionService>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// 1. Generated test for "storeUser"
	describe('storeUser', () => {

		it('should set currentUser and spy on sessionService', () => {
			// Arrange
			const _paramUser: IUser = {
				username: "",
				token: ""
			};
			// Act
			service.storeUser(_paramUser);
			// Assert
			expect(service.currentUser).toEqual(_paramUser);
			expect(sessionService.setItem).toHaveBeenCalledWith(Constants.SESSION_STORAGE_USER, JSON.stringify(_paramUser));
			expect(sessionService.setItem).toHaveBeenCalledWith(Constants.SESSION_STORAGE_TOKEN, _paramUser.token);
		});

	});

	// 2. Generated test for "removeUser"
	describe('removeUser', () => {

		it('should set currentUser to null and spy on sessionService', () => {
			// Arrange
			// Act
			service.removeUser();
			// Assert
			expect(service.currentUser).toBeNull();
			expect(sessionService.removeItem).toHaveBeenCalledWith(Constants.SESSION_STORAGE_USER);
			expect(sessionService.removeItem).toHaveBeenCalledWith(Constants.SESSION_STORAGE_TOKEN);
		});

	});

	// 3. Generated test for "getUser"
	describe('getUser', () => {

		it('should return currentUser if it is not null', () => {
			service.currentUser = {
				username: "",
				token: ""
			};

			expect(service.getUser()).toEqual(service.currentUser);
			expect(sessionServiceSpy.getItem).toHaveBeenCalledTimes(0);
		})

		it('getUser should return user from session storage if currentUser is null', () => {
			// Arrange
			service.currentUser = null;
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			const _spy = sessionServiceSpy.getItem.and.returnValue(JSON.stringify(_IUser));
			// Act
			const _returnIUser = service.getUser();
			// Assert
			expect(_returnIUser).toEqual(_IUser);
		});

		it('getUser should return `null` if currentUser is null and session storage has no user', () => {
			// Arrange
			service.currentUser = null;
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			const _spy = sessionServiceSpy.getItem.and.returnValue(null);
			// Act
			const _return = service.getUser();
			// Assert
			expect(_return).toBeNull();
		});

		it('should spy on sessionService if currentUser is null', () => {
			// Arrange
			service.currentUser = null;
			// Act
			service.getUser();
			// Assert
			expect(Constants.SESSION_STORAGE_USER).toBe('user_v02');
			expect(sessionService.getItem).toHaveBeenCalled();
			expect(sessionService.getItem).toHaveBeenCalledWith(Constants.SESSION_STORAGE_USER);
		});

	});

	// 5. Generated test for "updateToken"
	describe('updateToken', () => {

		it('#should spy on "updateToken" with return void', () => {
			// Arrange
			const _paramToken: string = "fluffy-Defenders";
			const _spy = spyOn(service, 'updateToken');
			// Act
			service.updateToken(_paramToken);
			// Assert
			expect(service.updateToken).toBeDefined();
			expect(_spy).toHaveBeenCalled();
		});

		it('#updateToken should spy on getUser and storeUser', () => {
			// Arrange
			const _paramToken: string = "paltry-AlbertCleary";
			const _IUser: IUser = {
				username: "",
				token: ""
			};
			const _spy = spyOn(service, 'getUser').and.returnValue(_IUser);
			const _spyStoreUser = spyOn(service, 'storeUser');
			// Act
			service.updateToken(_paramToken);
			// Assert
			expect(_spy).toHaveBeenCalled();
			expect(_spyStoreUser).toHaveBeenCalled();
			expect(_spyStoreUser).toHaveBeenCalledOnceWith(_IUser);
		});

	});


	// 13. Generated test for "currentToken"
	describe('currentToken', () => {

		it('#currentToken should return string', () => {
			// Arrange
			// Act
			const _string: string = service.currentToken();
			// Assert
			expect(sessionService.getItem).toHaveBeenCalled();
		});

		it('#currentToken should return string', () => {
			// Arrange
			const _returnString = 'foooooobaaasaaa';
			const _spy = sessionServiceSpy.getItem.and.returnValue(_returnString);
			// Act
			const _string: string = service.currentToken();
			// Assert
			expect(_string).toBe(_returnString);
		});

	});

	describe('old tests', () => {

		// 1. Generated test for "storeUser"
		it('#storeUser should return void', () => {
			// Arrange
			const user: IUser = {
				username: '',
				token: '',
			};
			const result = service.storeUser(user);
			const spy = spyOn(service, 'storeUser');
			// Act
			service.storeUser(user);
			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.storeUser).toBeDefined();
		});

		// 2. Generated test for "removeUser"
		it('#removeUser should return void', () => {
			// Arrange
			const result = service.removeUser();
			const spy = spyOn(service, 'removeUser');
			// Act
			service.removeUser();
			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.removeUser).toBeDefined();
		});

		// 3. Generated test for "getUser"
		it('#getUser should return IUser | null', () => {
			// Arrange
			const _iuser: IUser | null = null;
			const result: IUser | null = service.getUser();
			const spy = spyOn(service, 'getUser').and.returnValue(_iuser);
			// Act
			service.getUser();
			// Assert
			expect(service.getUser).toBeDefined();
			expect(result).toBeDefined();
			expect(spy).toHaveBeenCalled();
		});

		// 5. Generated test for "updateToken"
		it('#updateToken should return void', () => {
			// Arrange
			const token: string = "";
			const result = service.updateToken(token);
			const spy = spyOn(service, 'updateToken');
			// Act
			service.updateToken(token);
			// Assert
			expect(result).toBeUndefined();
			expect(result).toBeFalsy();
			expect(spy).toHaveBeenCalled();
			expect(service.updateToken).toBeDefined();
		});

	});

});

