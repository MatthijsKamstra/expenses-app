import { Component, Input, OnInit } from '@angular/core';


/**
 * little icon create, based upon Ficons (https://ficons.fiction.com/reference.html)
 *
 * @example
 * <app-icons icon="fa-magic"></app-icons>
 * @example
 * <app-icons icon="fa-magic" size="3"></app-icons>
 */
@Component({
	selector: 'app-icons',
	templateUrl: './icons.component.html',
	styleUrls: []
})
export class IconsComponent implements OnInit {

	@Input() icon!: string;
	@Input() size!: string; // default size without setting, but can use 1 (fa-lg),2 (fa-2x),3 (fa-3x),4 (fa-4x)
	@Input() displayInline: boolean = false;

	faSize: string = '';

	constructor() { }

	ngOnInit(): void {
		this.init();
	}

	/**
	 * this is to check if translation values are here when changed
	*/
	ngOnChanges() {
		this.init();
	}

	init(): void {
		// set size string to ficons class
		this.setSize();
		// set icon
		this.setIcon();
	}

	setIcon(): void {
		// use as default
		if (this.icon == null || this.icon == '') this.icon = '?';

		// when using `fa-xxx` we assume you know what you are talking about
		if (this.icon.indexOf('fa-') != -1) return;

		switch (this.icon.toLowerCase()) {
			case 'x': this.icon = 'fa-remove'; break;
			case 'home': this.icon = 'fa-home'; break;
			case 'create': this.icon = 'fa-pencil'; break;
			case '?': this.icon = 'fa-question'; break;

			case 'map': this.icon = 'fa-map-marker'; break;
			case 'googlemap': this.icon = 'fa-google'; break;
			case 'info': this.icon = 'fa-info-circle'; break;
			case 'arrow-right': this.icon = 'fa-arrow-right'; break;

			case 'about': this.icon = 'fa-info-circle'; break;
			case 'dashboard': this.icon = 'fa-dashboard'; break;

			case 'styleguide': this.icon = 'fa-magic'; break;
			case 'users': this.icon = 'fa-users'; break;
			case 'contact': this.icon = 'fa-tablet'; break;

			case 'reverse': this.icon = 'fa-exchange'; break;

			case 'user': this.icon = 'fa-user'; break;
			case 'locations': this.icon = 'fa-map-marker'; break;
			case 'distances': this.icon = 'fa-map'; break;
			case 'travel expenses': this.icon = 'fa-train'; break;
			case 'expenses': this.icon = 'fa-money'; break;
			case 'preview': this.icon = 'fa-print'; break;

			case 'user':
			case 'profile': this.icon = 'fa-user-circle'; break;

			case 'login':
			case 'page login': this.icon = 'fa-lock'; break;
			case 'logout':
			case 'page logout': this.icon = 'fa-unlock'; break;

			case 'setting':
			case 'settings':
			case 'page settings': this.icon = 'fa-cog'; break;

			case 'map': this.icon = 'fa-map'; break;
			case 'page map': this.icon = 'fa-map'; break;
			case 'nomap': this.icon = 'fa-map-o'; break;
			case 'bigger': this.icon = 'fa-plus-circle'; break;
			case 'smaller': this.icon = 'fa-minus-circle'; break

			default:
				console.log(`case '${this.icon.toLowerCase()}': this.icon = '${this.icon.toLowerCase()}'; break;`);
				this.icon = 'fa-remove';
				// https://ficons.fiction.com/reference.html
				break;
		}
	}

	private setSize(): void {
		switch (this.size) {
			case "1": this.faSize = "fa-lg"; break;
			case "2": this.faSize = "fa-2x"; break;
			case "3": this.faSize = "fa-3x"; break;
			case "4": this.faSize = "fa-4x"; break;
			default: this.faSize = ""; break;
		}
	}
}
