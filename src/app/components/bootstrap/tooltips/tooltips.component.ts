import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
	selector: 'app-tooltips',
	templateUrl: './tooltips.component.html',
	styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit, AfterViewInit {

	constructor() { }

	ngOnInit(): void {
		this.setupTooltips();
	}

	// ngAfterViewInit(): void {
	// 	this.setupTooltips();
	// }


	ngAfterViewInit(): void {
		const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl))
	}

	setupTooltips() {
		// https://getbootstrap.com/docs/5.2/components/tooltips/#enable-tooltips
		// TODO: find a better solution for this.

		const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		if (tooltipTriggerList.length === 0) {
			console.warn('bootstrap.Tooltip has NO data');
			return;
		}
		console.info('bootstrap.Tooltip has data');
		// console.log(tooltipTriggerList);
		const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl))
	}

	setupTooltipsDelayed(ms: number) {
		// https://getbootstrap.com/docs/5.2/components/tooltips/#enable-tooltips
		// TODO: find a better solution for this.
		setTimeout(function () {
			const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
			if (tooltipTriggerList.length === 0) {
				console.warn('bootstrap.Tooltip has NO data');
				return;
			}
			console.info('bootstrap.Tooltip has data');
			// console.log(tooltipTriggerList);
			const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl))
		}, ms);
	}

}
