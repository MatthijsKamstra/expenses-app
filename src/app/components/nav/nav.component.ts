import { Component } from '@angular/core';
import { Routes } from "@angular/router";
import { SecurityService } from 'src/app/services/security.service';
import { environment } from 'src/environments/environment';
// routes
import { pagesRoutes } from "../../routes/pages.route";
import { publicRoutes } from "../../routes/public.route";

import { testRoutes } from "../../routes/test.route";

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent {

	isHiddenIsProduction: boolean = true;

	publicRoutes: Routes = publicRoutes;
	testRoutes: Routes = testRoutes;
	pagesRoutes: Routes = pagesRoutes;

	protected readonly environment = environment;

	constructor(
		private securityService: SecurityService
	) { }

	ngOnInit(): void {
		this.isHiddenIsProduction = this.environment.production;
	}

}
