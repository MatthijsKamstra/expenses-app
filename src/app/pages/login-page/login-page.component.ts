import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
	usesExternalAuthentication!: boolean;
	// subscriptions: Subscription[] = [];

	constructor(
		private securityService: SecurityService
	) { }

	ngOnInit(): void {
		// const subscription = this.securityService.usesExternalAuthentication().subscribe(
		// 	externalAuthentication =>
		// 		this.usesExternalAuthentication = externalAuthentication
		// );
		// this.subscriptions.push(subscription);
	}

	ngOnDestroy(): void {
		// this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}
}
