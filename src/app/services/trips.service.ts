import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../shared/config/api';

@Injectable({
	providedIn: 'root'
})
export class TripsService {

	constructor(
		private http: HttpClient,
	) { }

	getTrips(): Observable<any> {
		const url = Api.getUrl().tripsApi;
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

}
