import { Routes } from "@angular/router";
import { AboutPageComponent } from "../pages/about-page/about-page.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { LogoutPageComponent } from "../pages/logout-page/logout-page.component";

export const publicRoutes: Routes = [
	{ path: "", pathMatch: "full", component: HomePageComponent },
	// { path: "home", title: "Home", component: HomePageComponent },
	{ path: "about", title: "About", component: AboutPageComponent },

	// { path: '', redirectTo: 'login', pathMatch: 'full', data: { title: 'Public Views' } },
	{ path: "login", title: "Login", component: LoginPageComponent },
	{ path: 'logout', title: 'Logout', component: LogoutPageComponent },
];

