import { TestBed } from "@angular/core/testing";
import { Router, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { SecurityService } from "src/app/services/security.service";
import { Redirects } from "src/app/shared/constants/redirects";
import { authGuard, loginGuard } from "./auth-guards";

describe('authGuard', () => {
	let router: Router;
	let securityServiceSpy: jasmine.SpyObj<SecurityService>;
	let authGardFailed: boolean | UrlTree;
	let authGuardSuccess: boolean | UrlTree;
	let loginGuardSuccess: boolean | UrlTree;
	let loginGuardFailed: boolean | UrlTree;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: SecurityService,
					useValue: jasmine.createSpyObj('SecurityService', ['isAuthenticated', 'checkNetManagementOrganisation', 'isSubstationManagementAllowed', 'isPublicLightingAllowed', 'isTariffSwitchingAllowed'])
				}
			]
		});
		router = TestBed.inject(Router);
		securityServiceSpy = TestBed.inject(SecurityService) as jasmine.SpyObj<SecurityService>;

		securityServiceSpy.isAuthenticated.and.returnValue(false);
		authGardFailed = TestBed.runInInjectionContext(authGuard);
		loginGuardSuccess = TestBed.runInInjectionContext(loginGuard);

		securityServiceSpy.isAuthenticated.and.returnValue(true);
		authGuardSuccess = TestBed.runInInjectionContext(authGuard);
		loginGuardFailed = TestBed.runInInjectionContext(loginGuard);
	});

	describe('authGuard', () => {
		it('#should return urlTree', () => {
			const urlTree = router.createUrlTree([Redirects.REDIRECT_LOGIN]);

			expect(authGardFailed).toEqual(urlTree);
		});

		it('#should return true', () => {
			expect(authGuardSuccess).toBeTrue();
		});
	});

	describe('loginGuard', () => {
		it('should return true', () => {
			expect(loginGuardSuccess).toBeTrue();
		})

		it('should return urlTree', () => {
			const urlTree = router.createUrlTree([Redirects.REDIRECT_AFTER_LOGIN]);

			expect(loginGuardFailed).toEqual(urlTree);
		})
	})

});
