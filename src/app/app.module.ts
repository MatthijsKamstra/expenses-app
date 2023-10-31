import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestPipe } from './_test/test.pipe';
import { TestComponent } from './_test/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { IconsComponent } from './elements/icons/icons.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsInfoPageComponent } from './pages/products-info-page/products-info-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ColorsComponent } from './pages/styleguide/colors/colors.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroComponent,
		NotFoundPageComponent,
		ColorsComponent,
		TestPipe,
		TestComponent,
		NavComponent,
		FooterComponent,
		IconsComponent,
		HomePageComponent,
		AboutPageComponent,
		DashboardPageComponent,
		UsersPageComponent,
		ProductsPageComponent,
		ProductsInfoPageComponent,
		StyleguideComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,

		HttpClientModule,
		FormsModule,

		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
