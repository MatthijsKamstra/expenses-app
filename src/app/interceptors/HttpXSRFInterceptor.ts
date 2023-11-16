import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { NotificationService } from "../services/notification.service";
import { SecurityCookieService } from "../services/security-cookie.service";
import { SecurityService } from "../services/security.service";
import { StorageSessionService } from "../services/storage-session.service";
import { Constants } from "../shared/constants/constants";


@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {

	constructor(
		private notificationService: NotificationService,
		private securityCookieService: SecurityCookieService,
		private securityService: SecurityService,
		private sessionService: StorageSessionService,
		private tokenExtractor: HttpXsrfTokenExtractor,
	) {
	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		req = this.addHeaders(req);

		return next.handle(req)
			.pipe(
				tap(response => {
					// if (this.externallyAlreadyLoggedOut(response)) {
					// 	this.securityService.navigateToLogoutPage();
					// } else if (response instanceof HttpResponse && response.headers && response.headers.has(Constants.AUTH_HEADER)) {
					if (response instanceof HttpResponse && response.headers && response.headers.has(Constants.AUTH_HEADER)) {
						this.storeToken(response);
					}
				}),
				catchError((error: HttpErrorResponse) => {
					if (error.status === 0) {
						this.notificationService.error('Network connection was lost');
					} else if (error.status === 401) {
						this.securityService.navigateToLogoutPage();
					}
					return throwError(() => error);
				})
			);
	}

	private addHeaders(req: HttpRequest<any>): HttpRequest<any> {
		let authToken = this.sessionService.getItem(Constants.SESSION_STORAGE_TOKEN);
		if (authToken !== null && !req.headers.has(Constants.AUTH_HEADER)) {
			req = req.clone({ headers: req.headers.set(Constants.AUTH_HEADER, authToken) });
		}
		return req;
	}

	private storeToken(response: HttpResponse<any>) {
		const token = response.headers.get(Constants.AUTH_HEADER) as string;
		this.securityCookieService.updateToken(token);
	}
}
