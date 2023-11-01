import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
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

// // for redirecting to home if already logged in
// export const loginGuard: () => boolean | UrlTree = () => {
// 	const router = inject(Router);
// 	const securityService = inject(SecurityService);

// 	const authenticated = securityService.isAuthenticated();
// 	if (authenticated) {
// 		// logged in so return false and redirect to home
// 		return router.createUrlTree([Redirects.REDIRECT_AFTER_LOGIN]);
// 	} else {
// 		// not logged in so return true and continue to login
// 		return true;
// 	}
// }
