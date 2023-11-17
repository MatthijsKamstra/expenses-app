// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Redirects {

	/**
	 * redirect values
	 */
	public static REDIRECT_AFTER_LOGIN: string = '/dashboard';
	public static REDIRECT_LOGIN: string = '/login';
	public static REDIRECT_LOGOUT: string = '/logout';
	public static REDIRECT_NOT_FOUND: string = '/not-found';
	public static REDIRECT_AFTER_SUBMIT_TRIP: string = '/trips';

}
