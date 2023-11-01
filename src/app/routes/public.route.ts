import { Routes } from "@angular/router";

import { LoginPageComponent } from "../pages/login-page/login-page.component";

export const publicRoutes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full', data: { title: 'Public Views' } },
	{ path: 'login', component: LoginPageComponent },
];
