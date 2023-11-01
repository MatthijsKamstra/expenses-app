// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Constants {
	// path
	public static loginURL: string = '/user/login';
	public static logoutURL: string = '/user/logout';

	public static locationURL: string = '/user/location';
	public static locationsURL: string = '/user/locations';

	// Headers
	public static AUTH_HEADER: string = 'X-Auth-Token';

	// Sessions storage
	public static SESSION_STORAGE_USER: string = 'user_mck_v01';
	public static SESSION_STORAGE_TOKEN: string = 'token_mck_v01';

	// local storage
	static LOCAL_STORAGE_EXPAND_TABLE: string = 'expand_table_mck_v01';

}
