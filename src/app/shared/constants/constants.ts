// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Constants {
	// path
	public static versionURL: string = '/api/version';

	public static testGetURL: string = '/api/test/get';
	public static testPostURL: string = '/api/test/post';
	public static testLoginURL: string = '/api/test/login';
	public static testStatus200URL: string = '/api/test/status200';
	public static testStatus404URL: string = '/api/test/status404';

	// api
	public static locationURL: string = '/api/location';
	public static locationsURL: string = '/api/locations';

	// user?
	public static loginURL: string = '/user/login';
	public static logoutURL: string = '/user/logout';

	// trips
	public static tripURL: string = '/api/trip';
	public static tripsURL: string = '/api/trips';

	// Headers
	public static AUTH_HEADER: string = 'X-Auth-Token';

	// Sessions storage
	public static SESSION_STORAGE_USER: string = 'user_mck_v01';
	public static SESSION_STORAGE_TOKEN: string = 'token_mck_v01';

	// local storage
	static LOCAL_STORAGE_EXPAND_TABLE: string = 'expand_table_mck_v01';
	static LOCATION_CURRENT: string = 'location_current_mck_v01';

}
