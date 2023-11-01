import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
	selector: 'app-throbber',
	templateUrl: './throbber.component.html',
	styleUrls: ['./throbber.component.scss']
})
export class ThrobberComponent {

	@Input() noData: boolean = false;

	/**
	 * @example
	 * ```ts
		   <app-throbber *ngIf="!device" [noData]="isDataLoadedFailed"></app-throbber>
	 * ```
	 */
	constructor() { }

}
