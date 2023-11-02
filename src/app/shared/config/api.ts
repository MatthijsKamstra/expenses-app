// Angular Modules
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Constants } from '../constants/constants';


@Injectable({
	providedIn: 'root'
})
export class Api {

	/**
	 * get the correct values based upon environment data
	 *
	 * @returns
	 */
	static getUrl(): IConstants {
		if (environment.apiEnabled) {
			return {
				env: `PRD`,

				loginApi: `${environment.apiUrl}${Constants.loginURL}`,
				logoutApi: `${environment.apiUrl}${Constants.logoutURL}`,

				locationApi: `${environment.apiUrl}${Constants.locationURL}`,
				locationsApi: `${environment.apiUrl}${Constants.locationsURL}`,

			}
		} else {
			return {
				env: `TEST`,

				loginApi: `assets/dummy/json/login.json`,
				logoutApi: `assets/dummy/json/logout.json`,

				locationApi: `assets/dummy/json/location.json`,
				locationsApi: `assets/dummy/json/locations.json`,
			}
		}
	}
}


export interface IConstants {

	env: string;

	loginApi: string;
	logoutApi: string;

	locationApi: string;
	locationsApi: string;
}
