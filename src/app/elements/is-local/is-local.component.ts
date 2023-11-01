import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-is-local',
	templateUrl: './is-local.component.html',
	styleUrls: ['./is-local.component.scss']
})
export class IsLocalComponent {

	constructor() { }

	getIcon(): string {
		let icon = 'fa fa-toggle-off';
		if (environment.apiEnabled) {
			icon = 'fa fa-toggle-on';
		}
		return icon;
	}

	getDescription(): string {
		let val = 'Local';
		if (environment.apiEnabled) {
			val = 'Live';
		}
		return val;
	}
}
