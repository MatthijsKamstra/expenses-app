import { Component, EventEmitter, Input, Output } from '@angular/core';

declare const bootstrap: any;

/**
 * @example
 *
 * ```ts
		<button class="btn btn-danger" data-bs-toggle="modal" attr.data-bs-target="#confirm_{{schedule.id}}">
			<app-icons icon="create"></app-icons>
			Create
		</button>
		<app-confirm-modal [id]="'confirm_'+schedule.id"
			title="{{'Remove'  }} {{schedule.code}}"
			body="{{'CONFIRM_SCHEDULE_DELETE'  }}"
			[nobutton]="true"
			(onConfirm)="doRemoveSchedule(schedule)">
		</app-confirm-modal>
 *	```
 */
@Component({
	selector: 'app-confirm-modal',
	templateUrl: './confirm-modal.component.html',
	styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

	@Input() id: string = 'exampleModal'; // numbers don't work: if you need numbers to work do something like `foo_${code.number}`
	@Input() title: string = 'Modal title';
	@Input() body: string = 'Modal body goes here';
	@Input() nobutton: boolean = false;

	@Output() onCancel = new EventEmitter<any>(); // probably overkill
	@Output() onConfirm = new EventEmitter<any>();

	myModal: any;

	constructor() { }

	onSubmitHandler() {
		this.onConfirm.emit();
		this.onHide()
	}

	onCancelHandler() {
		// console.warn(`onCancelHandler`);
		this.onCancel.emit();
		this.onHide()
	}

	onHide() {
		let modalEl = document.getElementById(this.id.toString());
		this.myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
		this.myModal.hide();
		// for some reason the backdrop is not removed, hacky
		document.querySelector('.modal-backdrop')?.remove();
	}
}

