import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Api } from '../shared/config/api';
import { IUser } from '../shared/interfaces/i-user';

@Injectable({
	providedIn: 'root'
})
export class VersionService {
	constructor(
		private http: HttpClient,
	) { }

	getVersion(): Observable<any> {
		const url = Api.getUrl().versionApi;
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
