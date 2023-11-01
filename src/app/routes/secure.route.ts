import { Routes } from "@angular/router";
import { DashboardPageComponent } from "../pages/dashboard-page/dashboard-page.component";
import { SettingsPageComponent } from "../pages/settings-page/settings-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";

export const secureRoutes: Routes = [
	{ path: "styleguide", title: "Test Styleguide", component: StyleguideComponent },
	{ path: "settings", title: "Page Settings", component: SettingsPageComponent },
	{ path: "dashboard", title: "Page Dashboard", component: DashboardPageComponent },

	// { path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	// { path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	// { path: "users", title: "Users", component: UsersPageComponent },
	// { path: "settings", title: "Page Settings", component: SettingsPageComponent },

];
