import { Routes } from "@angular/router";
import { DashboardPageComponent } from "../pages/dashboard-page/dashboard-page.component";
import { LocationsPageComponent } from "../pages/locations-page/locations-page.component";
import { SettingsPageComponent } from "../pages/settings-page/settings-page.component";
import { StyleguideComponent } from "../pages/styleguide/styleguide.component";
import { TripsPageComponent } from "../pages/trips-page/trips-page.component";

export const secureRoutes: Routes = [
	// { path: "styleguide", title: "Test Styleguide", component: StyleguideComponent },
	{ path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	{ path: "locations", title: "Locations", component: LocationsPageComponent },
	{ path: "trips", title: "Trips", component: TripsPageComponent },
	{ path: "settings", title: "Settings", component: SettingsPageComponent },

	// { path: "dashboard", title: "Dashboard", component: DashboardPageComponent },
	// { path: "styleguide", title: "Styleguide", component: StyleguideComponent },
	// { path: "users", title: "Users", component: UsersPageComponent },
	// { path: "settings", title: "Page Settings", component: SettingsPageComponent },

];
