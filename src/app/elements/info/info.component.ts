import { Component, Input, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

	@Input() text: string = 'info';


	constructor() { }

	ngOnInit(): void {
		// const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl));

		// TODO: find a better solution for this.
		setTimeout(function () {
			const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
			// console.log(tooltipTriggerList);
			const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
		}, 50);

	}

}
