import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';
import { TestService } from 'src/app/services/test.service';
import { VersionService } from 'src/app/services/version.service';
import { Redirects } from 'src/app/shared/constants/redirects';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	version!: string;
	isLogedInn: boolean = false;;

	constructor(
		private router: Router,
		private securityService: SecurityService,
		private testService: TestService,
		private versionService: VersionService,
	) { }

	ngOnInit(): void {
		this.getVersion();
		this.isLogedIn();
		// this.getTest();
		// this.getTestFocus();
	}

	isLogedIn() {
		if (this.securityService.isAuthenticated()) {
			this.router.navigate([Redirects.REDIRECT_AFTER_LOGIN]);
		}
	}

	getVersion() {
		this.versionService.getVersion().subscribe({
			next: (data: any) => {
				// console.log(data);
				// console.log(data.version);
				this.version = data.version;
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				// console.info('done');
			}
		});
	}

	getTest() {
		this.testService.testGet().subscribe({
			next: (data: any) => {
				console.log(data);
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				console.info('done');
			}
		});

		var obj = {
			username: 'Matthijs',
			password: '1234'
		}
		this.testService.testPost(obj).subscribe({
			next: (data: any) => {
				console.log(data);
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				console.info('done');
			}
		});

		var obj = {
			username: 'admin',
			password: '1234'
		}
		this.testService.login(obj).subscribe({
			next: (data: any) => {
				console.log(data);
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				console.info('done');
			}
		});

		this.testService.status404().subscribe({
			next: (data: any) => {
				console.log(data);
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				console.info('done');
			}
		});
	}

	getTestFocus() {
		var obj = {
			isServer: true
		}
		this.testService.status200(obj).subscribe({
			next: (data: any) => {
				console.log(data);
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
				console.warn(error.ok);
			},
			complete: () => {
				console.info('done');
			}
		});
	}

}
