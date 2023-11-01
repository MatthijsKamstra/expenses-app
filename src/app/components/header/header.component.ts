import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @example
 * ```
 * <app-header title="{{title}}" ></app-header>
 * ```
 */
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	@Input() title: string = 'Heading 1';
	@Input() icon: string = '';

	urlArr?: string[];
	urlMap = new Map<string, string>();
	isTopLevel: boolean = true;
	routerUrl: string = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.init();
	}

	ngOnChanges(changes: SimpleChanges) {
		this.init();
	}

	init() {
		if (this.icon == '') {
			this.icon = this.title;
		}
		this.routerUrl = this.router.url;

		/**
		 * 1. use `groups` for icon and  `/groups` for url;
		 * 2. use `groups` as name for link and  `/groups` for url;
		 * 2. use `create` as name for link and  `/groups/create` for url;
		 */

		let result = this.routerUrl.slice(1); // remove first slash
		if (result.indexOf('?') != -1) {
			// remove query string
			result = result.split('?')[0]
		}

		/**
		 * We maken doen hier twee handelingen:
		 * - We decoden een gecodeerde Uniform Resource Identifier (URI) string (this.routerUrl)
		 * - en we converteren de eerste character van deze string in een hoofdletter
		 *
		 * Voorbeeld: 'devices' word dan 'Devices'
		 *
		 * Hierdoor kunnen we gebruik maken van de standaard vertalingen (i18n) die er al zijn zonder onzinnige dubbeling te maken
		 */
		this.urlArr = result?.split('/').map(url => decodeURIComponent(url).charAt(0).toUpperCase() + url.slice(1));
		this.icon = this.urlArr[0];

		let path = '/';
		for (let i = 0; i < this.urlArr.length; i++) {
			const el = this.urlArr[i];
			// console.log(el);
			path += `${el}`;
			this.urlMap.set(el, path);
			path += `/`;
		}

		// console.log(this.urlMap);
		// console.log(this.urlArr.length);

		this.isTopLevel = this.urlArr?.length <= 1;

	}

	isId(part: string): boolean {
		let id: string | null = this.route.snapshot.paramMap.get('id');
		if (id == null) return false;
		return part === id;
	}

	isLast(part: string): boolean {
		if (this.urlArr == null) return false;
		return this.urlArr[this.urlArr.length - 1] === part;
	}

	onBack() {
		// console.log('onBack');
		this.router.navigate(['..'], { relativeTo: this.route })
	};

	protected readonly decodeURIComponent = decodeURIComponent;
}
