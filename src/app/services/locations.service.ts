import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../shared/config/api';

@Injectable({
	providedIn: 'root'
})
export class LocationsService {

	constructor(
		private http: HttpClient,
	) { }

	/**
	 *
	 * @param obj
	 * @returns
	*/
	getLocations(token: string): Observable<any> {
		const url = Api.getUrl().locationsApi;
		let observable: Observable<any>;

		if (environment.apiEnabled) {
			observable = this.http.post<any>(url, { token: token });
		} else {
			// needed for locally testing
			observable = this.http.get<any>(url);
		}

		return observable;
	}
}
