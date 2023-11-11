import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Api } from '../shared/config/api';
import { Redirects } from '../shared/constants/redirects';
import { ICredentials } from '../shared/interfaces/i-credentials';
import { IUser } from '../shared/interfaces/i-user';
import { SecurityCookieService } from './security-cookie.service';

@Injectable({
	providedIn: 'root'
})
export class SecurityService {

	constructor(
		private http: HttpClient,
		private securityCookieService: SecurityCookieService,
		private router: Router,
	) { }

	/**
	 * Attempt to authenticate a user by the given username and password
	 *
	 * @example
	 * ```js
	 *      this.securityService.login('foo', 'bar').subscribe(data => {
	 *          this.data = data;
	 *      });
	 * ```
	 *
	 * @param username
	 * @param password
	 */
	login(credentials: ICredentials): Observable<IUser> {
		const url = Api.getUrl().loginApi;
		let observable: Observable<IUser>;

		if (environment.apiEnabled) {
			// observable = this.http.post<IUser>(Api.getUrl().loginApi, credentials, { withCredentials: true });
			observable = this.http.post<IUser>(Api.getUrl().loginApi, credentials, { withCredentials: true });
		} else {
			// needed for locally testing
			observable = this.http.get<IUser>(url);
		}

		// return observable;
		return observable.pipe(
			tap((data) => {
				this.securityCookieService.storeUser(data);
			})
		);
	}

	navigateToLogoutPage() {
		this.router.navigate([Redirects.REDIRECT_LOGOUT]);
	}

	logout(): Observable<{}> {
		const url = Api.getUrl().logoutApi;
		let observable: Observable<{}>;
		// if (environment.apiEnabled) {
		// 	observable = this.http.post(url, {});
		// } else {
		// 	observable = this.http.get(url);
		// }
		observable = this.http.get(url);
		return observable;
	}

	getUser(): IUser | null {
		return this.securityCookieService.getUser();
	}

	/**
	 * Is the current user authenticated?
	 * @returns
	 */
	isAuthenticated(): boolean {
		// console.log('isAuthenticated');
		// console.log(this.securityCookieService.getUser());
		return !!this.securityCookieService.getUser();
	}

	clearLocalSession() {
		this.securityCookieService.removeUser();
	}

	currentToken(): string {
		return this.securityCookieService.currentToken();
	}

}

