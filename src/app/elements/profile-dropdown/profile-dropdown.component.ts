import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { IUser } from 'src/app/shared/interfaces/i-user';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-profile-dropdown',
	templateUrl: './profile-dropdown.component.html',
	styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

	protected TITLE: string = 'Profile';
	title: string = this.TITLE;
	user: string = '';

	isFeatureDashboard: boolean = false;
	isNetManagementOrganisation: boolean = false;
	isHiddenIsProduction: boolean = true;

	protected readonly environment = environment;

	constructor(
		private securityService: SecurityService,
	) { }

	ngOnInit(): void {
		this.isFeatureDashboard = this.environment.feature.dashboard;
		this.isHiddenIsProduction = this.environment.production;
		this.getUser();
	}

	getUser() {
		let user: IUser | null = this.securityService.getUser();
		if (user !== null) {
			// console.log(user);
			this.user = user.username;
		}
	}


}

