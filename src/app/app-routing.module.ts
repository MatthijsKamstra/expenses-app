import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

import { AuthorisedLayoutComponent } from "./layout/authorised/authorised-layout/authorised-layout.component";
import { GuestLayoutComponent } from "./layout/guest/guest-layout/guest-layout.component";
import { authGuard, loginGuard } from "./routes/guards/auth-guards";

import { pagesRoutes } from "./routes/pages.route";
import { publicRoutes } from "./routes/public.route";
import { secureRoutes } from "./routes/secure.route";
import { testRoutes } from "./routes/test.route";

const PUBLIC_ROUTES = [...publicRoutes];
// const TEST_ROUTES = [...testRoutes];
// const PAGES_ROUTES = [...pagesRoutes];
const SECURE_ROUTES = [...secureRoutes, ...pagesRoutes, ...testRoutes, ...publicRoutes];

const routes: Routes = [
	{
		path: '',
		component: GuestLayoutComponent,
		canActivate: [
			loginGuard
		],
		children: PUBLIC_ROUTES
	},
	{
		path: '',
		component: AuthorisedLayoutComponent,
		canActivate: [
			authGuard
		],
		children: [
			{
				path: '',
				children: SECURE_ROUTES
			},

		],
	},
	{ path: "**", title: "oeps", component: NotFoundPageComponent },  // Wildcard route for a 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

