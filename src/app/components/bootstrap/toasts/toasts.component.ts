import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

export interface IToast {
	id: string;
	title: string;
	body: string;
	date: Date;
}

@Component({
	selector: 'app-toasts',
	templateUrl: './toasts.component.html',
	styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

	toasts: IToast[] = [
		// {
		// 	id: 'a',
		// 	title: 'a-title',
		// 	body: 'a-body',
		// 	date: new Date(),
		// },
		// {
		// 	id: 'b',
		// 	title: 'b-title',
		// 	body: 'b-body',
		// 	date: new Date(),
		// },
		// {
		// 	id: 'c',
		// 	title: 'c-title',
		// 	body: 'c-body',
		// 	date: new Date(),
		// },


	];




	constructor() { }

	ngOnInit(): void {
		this.onToast()
	}

	onToast() {
		const toastTrigger = document.getElementById('liveToastBtn')
		const toastLiveExample = document.getElementById('liveToast')
		if (toastTrigger) {
			toastTrigger.addEventListener('click', () => {
				const toast = new bootstrap.Toast(toastLiveExample)
				toast.show()
			})
		}
	}

	onAddToastHandler() {
		// console.log('WIP add toast');
		let now = new Date();
		let newToast = {
			id: `d${now.toTimeString()}`,
			title: `d-${now.toTimeString()}`,
			body: `d-${now.toTimeString()}`,
			date: now,
		};
		this.toasts.push(newToast);
		this.onShowToastDelay(newToast.id, 50);
	}

	onShowToastDelay(id: string, delayMs: number) {
		setTimeout(function () {
			const toast = new bootstrap.Toast(document.getElementById(id));
			toast.show();
		}, delayMs);
	}

	convertDate(date: Date) {
		return new Date(date).toLocaleTimeString('nl');
	}
}
