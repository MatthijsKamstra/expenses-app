import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { TestService } from 'src/app/services/test.service';
import { VersionService } from 'src/app/services/version.service';
import { Redirects } from 'src/app/shared/constants/redirects';
import { ICredentials } from 'src/app/shared/interfaces/i-credentials';
import { IUser } from 'src/app/shared/interfaces/i-user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	// set loading on when getting data from server
	isLoading: boolean = false; // check icons

	// not sure this is really a good idea???
	authError!: string;

	// form
	loginForm = new FormGroup({
		username: new FormControl<string>('', [Validators.required, Validators.minLength(4), Validators.maxLength(320)]),
		password: new FormControl<string>('', [Validators.required, Validators.minLength(4)]),
	});

	constructor(
		private securityService: SecurityService,
		public router: Router,
	) { }

	ngOnInit(): void { }

	// ____________________________________ login ____________________________________

	/**
	 * Attempt to authenticate the user specified in the form's model
	 *
	 * @param credentials
	 */
	loginUser(credentials: ICredentials) {
		// console.log(credentials);
		this.securityService.login(credentials)
			.subscribe({
				next: (data: any) => {
					// console.log(data);
					// console.info('login true')
					// this.isLoading = false;
					// if (data.error) {
					// 	console.log('error');
					// } else {
					// 	console.log('done');
					// }
					this.router.navigate([Redirects.REDIRECT_AFTER_LOGIN]);
				},
				error: (error: HttpErrorResponse) => {
					// console.info('login false')
					this.isLoading = false;
					// If we get here then there was a problem with the login request to
					// the server
					this.handleLoginError(error);
					// console.warn(error);
				}
			});
	};

	private handleLoginError(error: HttpErrorResponse) {
		if (error.status == 401) {
			let _authErrorString = '';
			if (error.error && error.error.error && error.error.error.indexOf('expiry date contract') != -1) {
				_authErrorString = 'login.error.contractDateExpired';
			} else if (error.error && error.error.error && error.error.error.indexOf('expiry date BEI instruction') != -1) {
				_authErrorString = 'login.error.beiDateExpired';
			} else if (error.error && error.error.error && error.error.error.indexOf('this user account is now blocked') != -1) {
				_authErrorString = 'login.error.accountBlocked';
			} else if (error.error && error.error.error && error.error.error.indexOf('Unauthorized') != -1) {
				_authErrorString = 'login.error.invalidCredentials';
			} else {
				_authErrorString = 'login.error.invalidLogin';
			}
			this.authError = (_authErrorString);
		} else {
			this.authError = `login.error.serverError ${error.statusText}`;
		}
	}

	// ____________________________________ onHandlers ____________________________________

	onDebug1Handler() {
		this.loginForm.setValue({ password: '1234', username: 'test user' });
	}

	onSubmitForm() {
		this.isLoading = true;
		const credentials: ICredentials = {
			username: this.loginForm.value.username as string,
			password: this.loginForm.value.password as string
		}
		this.loginUser(credentials);
	}

	// ____________________________________ icon swapper ____________________________________

	getCorrectIcon() {
		let iconClass;
		if (this.isLoading) {
			iconClass = 'fa fa-spinner fa-pulse'; // loading: `fa fa-spinner fa-pulse`
		} else {
			if (this.loginForm.valid) {
				iconClass = 'fa-unlock';
			} else {
				iconClass = 'fa-lock';
			}
		}
		return iconClass;
	}

}
