import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';

// for accessing secure routes
export const authGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	const authenticated = securityService.isAuthenticated();
	if (authenticated) {
		// logged in so return true
		return true;
	} else {
		// not logged in so redirect to login page
		return router.createUrlTree([Redirects.REDIRECT_LOGIN]);
	}
}

// for redirecting to home if already logged in
export const loginGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	const authenticated = securityService.isAuthenticated();
	if (authenticated) {
		// logged in so return false and redirect to home
		return router.createUrlTree([Redirects.REDIRECT_AFTER_LOGIN]);
	} else {
		// not logged in so return true and continue to login
		return true;
	}
}

// for routes only accessible to a net management organisation
export const netManagementOrganisationGuard: () => Observable<boolean | UrlTree> = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	return securityService.checkNetManagementOrganisation().pipe(
		map(isNetManagementOrganisation => {
			if (isNetManagementOrganisation) {
				return true;
			} else {
				return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
			}
		})
	);
}

// for routes only accessible if substation management is allowed
export const substationManagementGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	if (securityService.isSubstationManagementAllowed()) {
		return true;
	} else {
		return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
	}
}

// for routes only accessible if public lighting is allowed
export const publicLightingGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	if (securityService.isPublicLightingAllowed()) {
		return true;
	} else {
		return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
	}
}

// for routes only accessible if tariff switching is allowed
export const tariffSwitchingGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	if (securityService.isTariffSwitchingAllowed()) {
		return true;
	} else {
		return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
	}
}

// for routes only accessible if tariff switching is allowed
export const operatorGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	if (securityService.isWebOperatorAllowed()) {
		return true;
	} else {
		return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
	}
}

export const installGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	if (securityService.isWebInstallationAllowed()) {
		return true;
	} else {
		return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
	}
}

export const scannerGuard: () => boolean | UrlTree = () => {
	const router = inject(Router);
	const securityService = inject(SecurityService);

	if (securityService.isWebInstallationAllowed()) {
		return true;
	} else {
		return router.createUrlTree([Redirects.REDIRECT_NOT_FOUND]);
	}
}
