import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { AccordionComponent } from './components/bootstrap/accordion/accordion.component';
import { CarouselComponent } from './components/bootstrap/carousel/carousel.component';
import { CollapseComponent } from './components/bootstrap/collapse/collapse.component';
import { DropdownsComponent } from './components/bootstrap/dropdowns/dropdowns.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { ToastsComponent } from './components/bootstrap/toasts/toasts.component';
import { TooltipsComponent } from './components/bootstrap/tooltips/tooltips.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { NavComponent } from './components/nav/nav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
// elements
import { IconsComponent } from './elements/icons/icons.component';
import { IsLocalComponent } from './elements/is-local/is-local.component';
import { ProfileDropdownComponent } from './elements/profile-dropdown/profile-dropdown.component';
import { ThrobberComponent } from './elements/throbber/throbber.component';
// pages
import { HttpXsrfInterceptor } from "./interceptors/HttpXSRFInterceptor";
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
// layout
import { AuthorisedLayoutComponent } from './layout/authorised/authorised-layout/authorised-layout.component';
import { GuestLayoutComponent } from './layout/guest/guest-layout/guest-layout.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
// directives
import { DebugDirective } from "./shared/directives/debug.directive";
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { LocationAddPageComponent } from './pages/location-add-page/location-add-page.component';

@NgModule({
	declarations: [
		AboutPageComponent,
		AccordionComponent,
		AppComponent,
		AuthorisedLayoutComponent,
		CarouselComponent,
		CollapseComponent,
		ColorsComponent,
		ConfirmModalComponent,
		DashboardPageComponent,
		DebugDirective,
		DropdownsComponent,
		FooterComponent,
		GuestLayoutComponent,
		HeaderComponent,
		HeroComponent,
		HomePageComponent,
		HomePageComponent,
		IconsComponent,
		IsLocalComponent,
		LoginComponent,
		LoginPageComponent,
		LogoutPageComponent,
		MapComponent,
		ModalComponent,
		NavComponent,
		NotFoundPageComponent,
		NotificationsComponent,
		PageContentComponent,
		ProfileDropdownComponent,
		SettingsPageComponent,
		StyleguideComponent,
		ThrobberComponent,
		ToastsComponent,
		TooltipsComponent,
		UsersPageComponent,
  LocationsPageComponent,
  LocationAddPageComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,

		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,

		LeafletModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
