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

				versionApi: `${environment.apiUrl}${Constants.versionURL}`,

				testGetApi: `${environment.apiUrl}${Constants.testGetURL}`,
				testPostApi: `${environment.apiUrl}${Constants.testPostURL}`,
				testLoginApi: `${environment.apiUrl}${Constants.testLoginURL}`,
				testStatus200Api: `${environment.apiUrl}${Constants.testStatus200URL}`,
				testStatus404Api: `${environment.apiUrl}${Constants.testStatus404URL}`,

				loginApi: `${environment.apiUrl}${Constants.loginURL}`,
				logoutApi: `${environment.apiUrl}${Constants.logoutURL}`,

				locationApi: `${environment.apiUrl}${Constants.locationURL}`,
				locationsApi: `${environment.apiUrl}${Constants.locationsURL}`,
				// locationsApi(userID: string): string {
				// 	return `${environment.apiUrl}${Constants.locationsURL.replace(':userID', `${userID}`)}`
				// },

			}
		} else {
			return {
				env: `TEST`,

				versionApi: `assets/dummy/json/login.json`,

				testGetApi: `assets/dummy/json/testGetApi.json`,
				testPostApi: `assets/dummy/json/testPostApi.json`,
				testLoginApi: `assets/dummy/json/testLoginApi.json`,
				testStatus200Api: `assets/dummy/json/testStatus200Api.json`,
				testStatus404Api: `assets/dummy/json/testStatus404Api.json`,

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

	versionApi: string;

	testGetApi: string;
	testPostApi: string;
	testLoginApi: string;
	testStatus200Api: string;
	testStatus404Api: string;

	loginApi: string;
	logoutApi: string;

	locationApi: string;
	locationsApi: string;
	// locationsApi: (id: string) => string;
}
