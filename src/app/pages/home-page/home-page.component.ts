import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { VersionService } from 'src/app/services/version.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	constructor(
		private testService: TestService,
		private versionService: VersionService,
	) { }

	ngOnInit(): void {
		this.getVersion();
		// this.getTest();
		// this.getTestFocus();
	}

	getVersion() {
		this.versionService.getVersion().subscribe({
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
