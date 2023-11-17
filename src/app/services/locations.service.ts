import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../shared/config/api';
import { ILocation } from '../shared/interfaces/i-location';
import { SecurityService } from './security.service';

@Injectable({
	providedIn: 'root'
})
export class LocationsService {

	constructor(
		private http: HttpClient,
		private securityService: SecurityService,
	) { }

	/**
	 *
	 * @param obj
	 * @returns
	*/
	getLocations(): Observable<any> {
		// let token = this.securityService.currentToken();
		const url = Api.getUrl().locationsApi;
		let observable: Observable<any>;

		if (environment.apiEnabled) {
			observable = this.http.post<any>(url, {});
		} else {
			// needed for locally testing
			observable = this.http.get<any>(url);
		}

		return observable;
	}

	setLocation(obj: ILocation): Observable<any> {
		// let token = this.securityService.currentToken();
		// let _obj: any = { ...obj };
		// _obj.token = token;
		// console.log(_obj);

		const url = Api.getUrl().locationApi;
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
