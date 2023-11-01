

import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Redirects } from 'src/app/shared/constants/redirects';
import { SecurityService } from '../../services/security.service';
import { authGuard, loginGuard, netManagementOrganisationGuard, publicLightingGuard, substationManagementGuard, tariffSwitchingGuard } from './auth-guards';

describe('authGuard', () => {
	let router: Router;
	let securityServiceSpy: jasmine.SpyObj<SecurityService>;
	let authGardFailed: boolean | UrlTree;
	let authGuardSuccess: boolean | UrlTree;
	let loginGuardSuccess: boolean | UrlTree;
	let loginGuardFailed: boolean | UrlTree;
	let netManagementOrganisationGuardSuccess: Observable<boolean | UrlTree>;
	let netManagementOrganisationGuardFailed: Observable<boolean | UrlTree>;
	let substationManagementGuardSuccess: boolean | UrlTree;
	let substationManagementGuardFailed: boolean | UrlTree;
	let publicLightingGuardSuccess: boolean | UrlTree;
	let publicLightingGuardFailed: boolean | UrlTree;
	let tariffSwitchingGuardSuccess: boolean | UrlTree;
	let tariffSwitchingGuardFailed: boolean | UrlTree;

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

		securityServiceSpy.checkNetManagementOrganisation.and.returnValue(of(true));
		netManagementOrganisationGuardSuccess = TestBed.runInInjectionContext(netManagementOrganisationGuard);
		securityServiceSpy.checkNetManagementOrganisation.and.returnValue(of(false));
		netManagementOrganisationGuardFailed = TestBed.runInInjectionContext(netManagementOrganisationGuard);

		securityServiceSpy.isSubstationManagementAllowed.and.returnValue(true);
		substationManagementGuardSuccess = TestBed.runInInjectionContext(substationManagementGuard);
		securityServiceSpy.isSubstationManagementAllowed.and.returnValue(false);
		substationManagementGuardFailed = TestBed.runInInjectionContext(substationManagementGuard);

		securityServiceSpy.isPublicLightingAllowed.and.returnValue(true);
		publicLightingGuardSuccess = TestBed.runInInjectionContext(publicLightingGuard);
		securityServiceSpy.isPublicLightingAllowed.and.returnValue(false);
		publicLightingGuardFailed = TestBed.runInInjectionContext(publicLightingGuard);

		securityServiceSpy.isTariffSwitchingAllowed.and.returnValue(true);
		tariffSwitchingGuardSuccess = TestBed.runInInjectionContext(tariffSwitchingGuard);
		securityServiceSpy.isTariffSwitchingAllowed.and.returnValue(false);
		tariffSwitchingGuardFailed = TestBed.runInInjectionContext(tariffSwitchingGuard);
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

	describe('netManagementOrganisationGuard', () => {
		it('should return Observable of  true', () => {
			netManagementOrganisationGuardSuccess.subscribe(
				isNMOrg => expect(isNMOrg).toBeTrue()
			)
		})

		it('should return Observable of urlTree', () => {
			const urlTree = router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);

			netManagementOrganisationGuardFailed.subscribe(
				isNMOrg => expect(isNMOrg).toEqual(urlTree)
			)
		})
	})

	describe('substationManagementGuard', () => {
		it('should return true', () => {
			expect(substationManagementGuardSuccess).toBeTrue();
		})

		it('should return urlTree', () => {
			const urlTree = router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);

			expect(substationManagementGuardFailed).toEqual(urlTree);
		})
	})

	describe('publicLightingGuard', () => {
		it('should return true', () => {
			expect(publicLightingGuardSuccess).toBeTrue();
		})

		it('should return urlTree', () => {
			const urlTree = router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);

			expect(publicLightingGuardFailed).toEqual(urlTree);
		})
	})

	describe('tariffSwitchingGuard', () => {
		it('should return true', () => {
			expect(tariffSwitchingGuardSuccess).toBeTrue();
		})

		it('should return urlTree', () => {
			const urlTree = router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);

			expect(tariffSwitchingGuardFailed).toEqual(urlTree);
		})
	})
});
