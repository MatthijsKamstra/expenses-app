import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../shared/config/api';

@Injectable({
	providedIn: 'root'
})
export class TestService {



	constructor(
		private http: HttpClient,
	) { }

	/**
	 *
	 * @returns
	 */
	testGet(): Observable<any> {
		const url = Api.getUrl().testGetApi;
		let observable: Observable<any>;

		// if (environment.apiEnabled) {
		// 	observable = this.http.post<any>(Api.getUrl().loginApi, credentials, { withCredentials: true });
		// } else {
		// needed for locally testing
		// 	observable = this.http.get<any>(url);
		// }

		observable = this.http.get<any>(url);
		return observable;
	}

	/**
	 *
	 * @param obj
	 * @returns
	 */
	testPost(obj: {}): Observable<any> {
		const url = Api.getUrl().testPostApi;
		let observable: Observable<any>;

		if (environment.apiEnabled) {
			observable = this.http.post<any>(url, obj);
		} else {
			// needed for locally testing
			observable = this.http.get<any>(url);
		}

		return observable;
	}


	login(obj: { username: string; password: string; }): Observable<any> {
		const url = Api.getUrl().testLoginApi;
		let observable: Observable<any>;

		if (environment.apiEnabled) {
			observable = this.http.post<any>(url, obj);
		} else {
			// needed for locally testing
			observable = this.http.get<any>(url);
		}

		return observable;
	}

	status404(): Observable<any> {
		const url = Api.getUrl().testStatus404Api;
		let observable: Observable<any>;

		if (environment.apiEnabled) {
			observable = this.http.post<any>(url, {});
		} else {
			// needed for locally testing
			observable = this.http.get<any>(url);
		}

		return observable;
	}


	status200(obj: { isServer: boolean; }): Observable<any> {
		const url = Api.getUrl().testStatus200Api;
		let observable: Observable<any>;

		if (environment.apiEnabled) {
			observable = this.http.post<any>(url, obj);
		} else {
			// needed for locally testing
			observable = this.http.get<any>(url);
		}

		return observable;
	}

}
