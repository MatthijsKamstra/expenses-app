import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationsService } from 'src/app/services/locations.service';
import { Compensation } from 'src/app/shared/config/compensation';
import { ILocation } from 'src/app/shared/interfaces/i-location';
import { ILocations } from 'src/app/shared/interfaces/i-locations';

@Component({
	selector: 'app-trips-create-page',
	templateUrl: './trips-create-page.component.html',
	styleUrls: ['./trips-create-page.component.scss']
})
export class TripsCreatePageComponent {

	title: string = 'Create Trips';





	currentDate: Date = new Date();

	date2022: Date = new Date('2022');
	date2023: Date = new Date('2023');
	date2024: Date = new Date('2024');
	date2025: Date = new Date('2025');

	// distances!: IDistance[];
	// locations!: ILocation[];
	// declarations: IDeclaration[] = [];

	isDeclarationsLoaded: boolean = false;

	locationMap = new Map<string, ILocation>();

	locations!: ILocations[];

	profileForm = new FormGroup({
		locationDate: new FormControl(this.convertTodayForForm(), Validators.required),
		locationFrom: new FormControl('', Validators.required),
		locationTo: new FormControl('', Validators.required),
		locationTotalDistance: new FormControl(this.calculateDistance(), Validators.required),
		locationReturnValue: new FormControl({ value: this.getTaxfreeCompensation(this.currentDate), disabled: true }, Validators.required),
		locationTotal: new FormControl({ value: this.calculateTotal(), disabled: true }),
	});
	// distances!: IDistances;
	// quick and easy access
	localDate!: Date;
	localFrom!: ILocation;
	localTo!: ILocation;
	localTotalDistance!: number;
	localTotal!: string;


	constructor(
		// private dataService: DataService,
		// private TravelService: TravelService,
		// private mdService: MdService,
		private locationsService: LocationsService,
		private datePipe: DatePipe,
	) { }

	ngOnInit(): void {
		this.locationsService.getLocations().subscribe({
			next: (data: any) => {
				// console.log(data);
				// this.locationsArr = data.content;
				this.locations = data.content;
				// console.log(this.locationsArr);
				// this.addMarkers();
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				// console.info('done');
			}
		});
		// this.dataService.getLocations().subscribe(data => {
		// 	// console.log('dataService.getLocations');
		// 	// console.log(data);
		// 	this.locations = data;
		// 	for (let i = 0; i < data.length; i++) {
		// 		const element: ILocation = data[i];
		// 		this.locationMap.set(element.id, element);
		// 	}
		// });
		// this.dataService.getDistances().subscribe(data => {
		// 	// console.log('dataService.getDistance()');
		// 	// console.log(data);
		// 	this.distances = data;
		// });
		// this.TravelService.getData().subscribe({
		// 	next: (data) => {
		// 		// console.log(this.declarations);
		// 		this.isDeclarationsLoaded = true;
		// 		this.declarations = data;

		// 		// console.log(this.declarations);
		// 		// this.declarations.sort((a, b) => {
		// 		// 	if (a.date < b.date) {
		// 		// 		return -1;
		// 		// 	}
		// 		// 	if (a.date >= b.date) {
		// 		// 		return 1;
		// 		// 	}
		// 		// 	return 0;
		// 		// })
		// 		// console.log(this.declarations);

		// 	},
		// });
		// this.mdService.getData('/assets/md/declarations.md').subscribe({
		// 	next: (data) => {
		// 		this.md = data;
		// 	}
		// });
	}

	convertForm2LocalData() {
		// console.log('convert data from form for easy acces');

		let _date = this.profileForm.get('locationDate')?.value;
		let _from = this.profileForm.get('locationFrom')?.value;
		let _to = this.profileForm.get('locationTo')?.value;
		let _distance = this.profileForm.get('locationTotalDistance')?.value;
		let _returnValue = this.profileForm.get('locationReturnValue')?.value;
		let _total = this.profileForm.get('locationTotal')?.value;

		if (_date) {
			this.currentDate = new Date(_date);
		}
		if (_from) {
			this.localFrom = this.locationMap.get(_from) as ILocation;
		}
		if (_to) {
			this.localTo = this.locationMap.get(_to) as ILocation;
		}
		if (_distance) {
			this.localTotalDistance = _distance;
		}
		if (_total) {
			this.localTotal = (this.calculateTotal());
		}
	}

	convertTodayForForm(): string {
		return new Date(this.currentDate).toISOString().split('T')[0];
		// return new Date(this.currentDate).toLocaleDateString('nl');
	}

	getTaxfreeCompensation(date: Date): number {
		let fee = Compensation.taxfree(date.getFullYear());
		return fee;
	}

	letsgetdisctance(): number {
		return 1.23;
	}

	calculateDistance(): number {
		let dist = -1;
		if (!this.profileForm) return dist;

		let fromId = this.profileForm.get('locationFrom')?.value;
		let toId = this.profileForm.get('locationTo')?.value;

		if (fromId && toId) {
			let locationFrom = this.locationMap.get(fromId) as ILocation;
			let locationTo = this.locationMap.get(toId) as ILocation;

			// // const id = locationFrom.id + '___' + locationTo.id;
			// const id: string = Gen.ID(locationFrom, locationTo);
			// dist = (this.getDistanceById(id));
		}
		return dist;
	}

	/**
	 *
	 * @param id
	 */
	// getDistanceById(id: string): number {
	// 	let dist = -1;
	// 	if (this.distances) {
	// 		for (let i = 0; i < this.distances.length; i++) {
	// 			const val = this.distances[i];
	// 			if (val.id === id) {
	// 				dist = val.distance_km;
	// 			}
	// 		}
	// 	}
	// 	return dist;
	// }

	/**
	 *
	 * @returns
	 */
	calculateTotal(): string {
		let km: number = 0;
		if (this.profileForm) {
			km = Number(this.profileForm.get('locationTotalDistance')?.value);
		}
		let val = km * this.getTaxfreeCompensation(this.currentDate);
		let round = val.toFixed(2);
		return `${round}`;
	}

	// ____________________________________ forms ____________________________________

	/**
	 *
	 */
	onFormSubmit() {
		// console.log(this.profileForm.value);
		console.log(this.profileForm.getRawValue());
		this.convertForm2LocalData();
		// let obj: IDeclaration = {
		// 	"date": this.datePipe.transform(this.currentDate, 'yyyy-MM-dd') as string,
		// 	"distance_km": this.localTotalDistance,
		// 	"from": this.localFrom,
		// 	"to": this.localTo,
		// }
		// this.declarations.push(obj);
		// // console.log(this.declarations);

		// // // Object.entries(this.declarations).sort((a, b) => b.date - a.date);
		// // this.declarations.sort((a, b) => {
		// // 	if (a.date < b.date) {
		// // 		return 1;
		// // 	}
		// // 	if (a.date >= b.date) {
		// // 		return -1;
		// // 	}
		// // 	return 0;
		// // })

		// // console.log(this.declarations);
	}

	/**
	 *
	 */
	onFormChange() {
		// console.log(this.profileForm.value);
		console.log(this.profileForm.getRawValue());

		this.convertForm2LocalData();

		// totals depend on currentdate
		if (this.profileForm.get('locationDate')?.value) {
			this.currentDate = new Date(this.profileForm.get('locationDate')?.value as string);
			this.profileForm.get('locationTotal')?.setValue(this.calculateTotal(), {
				onlySelf: true,
			});
		}

		// this.storyMode();

	}

	// ____________________________________ map ____________________________________

	isMapDisabled() {
		return !(this.profileForm.get('locationFrom')?.value != '' && this.profileForm.get('locationTo')?.value != '');
	}

	onAnwbMapHandler() {
		// console.log(`onAnwbMapHandler()`);
		let fromId = this.profileForm.get('locationFrom')?.value;
		let toId = this.profileForm.get('locationTo')?.value;
		if (fromId && toId) {
			let locationFrom = this.locationMap.get(fromId);
			let locationTo = this.locationMap.get(toId);
			// // // // https://www.anwb.nl/verkeer/routeplanner?displayType=instructions&lat1=52.3500416&lat2=51.9846814&lon1=4.7885806&lon2=5.8941824&name1=Pieter%20Calandlaan%20450%2C%201060%20TT%2C%20Amsterdam&name2=Utrechtseweg%2068%2C%206812%20AH%2C%20Arnhem&transportMode1=car
			// let url = `https://www.anwb.nl/verkeer/routeplanner?displayType=instructions&name1=${locationFrom?.street}+${locationFrom?.number},+${locationFrom?.zipcode}+${locationFrom?.city}&name2=${locationTo?.street}+${locationTo?.number},+${locationTo?.zipcode}+${locationTo?.city}`.replace(' ', '%20');
			// window.open(url, '_blank');
		}
	}

	onGoogleMapHandler() {
		// console.log(`onGoogleMapHandler()`);
		let fromId = this.profileForm.get('locationFrom')?.value;
		let toId = this.profileForm.get('locationTo')?.value;
		if (fromId && toId) {
			let locationFrom = this.locationMap.get(fromId);
			let locationTo = this.locationMap.get(toId);
			// // // // 'https://www.google.nl/maps/dir/Pieter+Calandlaan+450,+1060+TT+Amsterdam/RawWorks,+De+Vork,+Odijk/@52.2028853,4.8690217,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x47c5e3df85b2f019:0xeed0bc5a1717f6b4!2m2!1d4.7881972!2d52.3501655!1m5!1m1!1s0x47c64734efb0c599:0xd727347d6a74aa30!2m2!1d5.229757!2d52.0512089';
			// // // // 'https://www.google.nl/maps/dir/Pieter+Calandlaan+450,+1060+TT+Amsterdam/RawWorks,+De+Vork,+Odijk/';
			// let url = `https://www.google.nl/maps/dir/${locationFrom?.street}+${locationFrom?.number},+${locationFrom?.zipcode}+${locationFrom?.city}/${locationTo?.street}+${locationTo?.number},+${locationTo?.zipcode}+${locationTo?.city}`.replace(' ', '+');
			// window.open(url, '_blank');
		}
	}

	// ____________________________________ onClickHandler ____________________________________

	/**
	 * test dummy data
	 *
	 * @param from
	 * @param to
	 */
	// onDebugRoute(from: string, to: string) {
	// 	this.profileForm.controls['locationFrom'].setValue(from, { onlySelf: true });
	// 	this.profileForm.controls['locationTo'].setValue(to, { onlySelf: true });
	// 	this.profileForm.controls['locationTotalDistance'].setValue(this.calculateDistance(), { onlySelf: true });
	// 	this.profileForm.get('locationTotal')?.setValue(this.calculateTotal(), { onlySelf: true, });

	// 	this.storyMode();
	// }

	/**
	 *
	 */
	// onReverse() {
	// 	this.convertForm2LocalData();
	// 	let locationFrom = this.profileForm.get('locationFrom')?.value as string;
	// 	let locationTo = this.profileForm.get('locationTo')?.value as string;
	// 	this.profileForm.get('locationFrom')?.setValue(locationTo, { onlySelf: true });
	// 	this.profileForm.get('locationTo')?.setValue(locationFrom, { onlySelf: true });
	// }

	onReverse() {
		throw new Error('Method not implemented.');
	}

	// storyMode(): string {
	// 	this.convertForm2LocalData();
	// 	let str = `<span class="fw-bold">StoryMode:</span> Trip on <span class="badge text-bg-info fw-bold">"${this.datePipe.transform(this.currentDate, 'fullDate')}"</span>`;
	// 	if (this.localFrom) str += ` from <span class="badge text-bg-primary fw-bold">"${this.localFrom.type} (${this.localFrom.street} ${this.localFrom.number}, ${this.localFrom.city})"</span>`;
	// 	if (this.localTo) str += ` to <span class="badge text-bg-primary fw-bold">"${this.localTo.type} (${this.localTo.street} ${this.localTo.number}, ${this.localTo.city})"</span>`;
	// 	if (this.localTotalDistance > 0) str += ` a total of <span class="badge text-bg-warning fw-bold">${this.localTotalDistance} km</span>`;
	// 	if (Number(this.localTotal) > 0) str += ` a return of <span class="badge text-bg-danger fw-bold">€${this.localTotal}</span>`;
	// 	str += '.';
	// 	return str;
	// }

}

